import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma.js";
import { canManageUser } from "../policy/userPolicy.js";

export const listUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  res.json(users);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) return res.sendStatus(400); 

  const target = await prisma.user.findUnique({
    where: { id },
  });

  if (!target) return res.sendStatus(404);

  const user = req.user;
  if (!user) return res.sendStatus(401);

  if (!canManageUser(user.role, target.role)) {
    return res.sendStatus(403);
  }

  await prisma.user.delete({
    where: { id: target.id },
  });

  res.json({ message: "User deleted" });
};
