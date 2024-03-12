"use server";

import { api } from "@/plugins/service";
import { JwtResponseDto, LocalAuthDto } from "@/swagger/api";
import { cookies } from "next/headers";

export async function login(payload: LocalAuthDto) {
  try {
    const response = await api.auth.authControllerLogin(payload);
    const { user, bearerToken } = response.data as JwtResponseDto;
    cookies().set("antara_session", bearerToken);
    return {
      user,
      bearerToken,
    };
  } catch (error) {
    return error;
  }
}

export async function getSession() {
  const session = cookies().get("antara_session")?.value;
  return session;
}
