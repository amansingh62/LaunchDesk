export const canManageUser = (actorRole: string, targetRole: string) => {
    if(actorRole == "ADMIN") return true;
    if(actorRole === "MANAGER" && targetRole !== "ADMIN") return true;

    return false;
}