"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            }
        )
        
    if(!res.ok){
        setError("Invalid credentials");
        return;
    }

    router.push("/dashboard");
    };

    return (
        <form onSubmit={submit}>
         <h1>Login</h1>
         {error && <p>{error}</p>}
         <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
         <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
         <button>Login</button>
        </form>
    );
};