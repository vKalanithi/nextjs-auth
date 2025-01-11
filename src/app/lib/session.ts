import { cookies } from "next/headers";
import "server-only";

export async function createSession(userId: string, expiresAt: Date) {
  const cookieActions = await cookies();

  cookieActions.set("session", userId, {
    expires: expiresAt,
  });
}

export async function deleteSession() {
  (await cookies()).delete("session");
}

export async function verifySession(session: string | undefined = "") {
  try {
    if (session && session >= "1") {
      return {
        userId: 1,
      };
    }
  } catch (error) {
    console.log("Failed to verify session", JSON.stringify(error));
  }
}
