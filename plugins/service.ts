import { cookies } from "next/headers";
import { Api } from "../swagger/api";
import { useToast } from "@/components/ui/use-toast";

// export const Api = axios.create({
//   baseURL: process.env.API_URL || "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

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
  async (error) => {
    console.log("error", error.response.status);

    // const { toast } = useToast();
    // if (error.response.status === 401) {
    //   toast({
    //     title: "Invalid Credentials",
    //     description: "Please check your credentials and try again",
    //     variant: "destructive",
    //     duration: 2000,
    //   });
    // }

    // if (error.response.status === 401) {
    //   // message.error(error.response.data.message);

    //   deleteCookie("dabin_token");
    //   // window.location.reload();
    //   NextResponse.redirect(`${process.env.APP_URL}/auth/login/`);

    //   //   const refreshToken = localStorage.getItem("refreshToken");
    //   //   const response = await Api.post("/auth/refresh", {
    //   //     refreshToken,
    //   //   });
    //   //   if (response.status === 200) {
    //   //     localStorage.setItem("token", response.data.token);
    //   //     localStorage.setItem("refreshToken", response.data.refreshToken);
    //   //     return Api(originalRequest);
    //   //   }
    // }

    return Promise.reject(error);
  }
);
