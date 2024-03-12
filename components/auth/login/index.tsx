import Image from "next/image";
import { FormLogin } from "./form";

export const LoginPage = () => {
  return (
    <div className="h-svh w-full flex max-sm:flex-col">
      <div className="w-1/2 max-sm:w-full flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt=""
            src={"/assets/logo/app-white.png"}
            width={600}
            height={600}
            className="max-sm:w-[300px] max-sm:h-[300px]"
          />
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full space-y-10 flex flex-col justify-center items-center p-[100px] max-lg:p-[50px]">
        <div className="flex flex-col items-center justify-center space-y-2">
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
