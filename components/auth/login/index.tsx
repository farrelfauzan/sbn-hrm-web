"use cliet";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FormLogin } from "./form";

export const LoginPage = () => {
  return (
    <div className="h-svh w-full flex">
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt=""
            src={"/assets/logo/app-white.png"}
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="w-1/2 space-y-10 flex flex-col justify-center items-center p-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Welcome to AntaraCo
          </h1>
          <p className="text-center">Please login to continue</p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
