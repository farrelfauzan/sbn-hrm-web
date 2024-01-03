import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronFirst } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const SideBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="https://img.logoipsum.com/243.svg"
            alt=""
            width={128}
            height={128}
          />
          <Button variant="ghost" className="p-1.5">
            <ChevronFirst />
          </Button>

          <ul className="flex-1">{children}</ul>

          <div className="border-t flex p-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className={`flex justify-between items-center w-52 ml-3`}>
              <div className="">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
