import { jwtVerify } from "jose";

interface IPayload {
  token: string;
  userId: number;
  iat?: string;
  exp?: string;
}

export async function verifyJwtToken(
  token: string | undefined
): Promise<IPayload | undefined> {
  if (token) {
    try {
      const { payload }: { payload: IPayload | null } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY)
      );

      if (payload) {
        return {
          token,
          userId: payload.userId,
          iat: payload.iat,
          exp: payload.exp,
        };
      } else {
        return undefined;
      }
    } catch (error: any) {
      console.error("Error decoding token:", error.message);
      return undefined;
    }
  }
}
