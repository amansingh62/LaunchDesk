import { cookies } from "next/headers";

export async function serverFetch(path: string, options: RequestInit = {}){
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
       .getAll()
       .map(c => `${c.name}=${c.value}`)
       .join(";");

       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`,
        {
            ...options,
            headers: {
                ...options.headers,
                Cookie: cookieHeader,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
       );

       if(!res.ok){
         throw new Error("Unauthorized");
       }

       return res.json();
}