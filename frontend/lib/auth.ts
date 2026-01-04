import { serverFetch } from "./fetcher";

export async function getCurrentUser() {
    return serverFetch("/auth/me");
}