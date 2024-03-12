"use server";

import { api } from "@/plugins/service";
import { JwtResponseDto, LocalAuthDto } from "@/swagger/api";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { useToast } from "@/components/ui/use-toast";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(payload: LocalAuthDto) {
  try {
    const response = await api.auth.authControllerLogin(payload);
    const { user, bearerToken } = response.data as JwtResponseDto;
    cookies().set("antara_session", bearerToken);
    // cookies().set("user", JSON.stringify(user));
    console.log(response);
    return {
      user,
      bearerToken,
    };
  } catch (error) {
    // console.log(error);
    return error;
    // toast({
    //   title: "Invalid Credentials",
    //   description: "Please check your credentials and try again",
    //   variant: "destructive",
    //   duration: 2000,
    // });
  }
}

export async function getSession() {
  const session = cookies().get("antara_session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
