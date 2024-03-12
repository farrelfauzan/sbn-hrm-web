import { cookies } from "next/headers";
import { Api } from "../swagger/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const api = new Api({
  baseURL: process.env.API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.instance.interceptors.request.use(
  (config: any) => {
    const token = cookies().get("antara_session");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.instance.interceptors.response.use(
  (response) => {
    console.log("Service", "Response Received");

    return response;
  },
  async (error: AxiosError | any) => {
    console.log("error", error.response?.data.message);

    if (error.response?.status === 401) {
      NextResponse.redirect(`${process.env.APP_URL}/auth/login/`);
    }

    return Promise.reject(error);
  }
);
