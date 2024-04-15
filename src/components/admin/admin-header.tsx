import Link from "next/link";
import React, { FC } from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import ThemeToggle from "../layout/ThemeToggle/theme-toggle";
import { MobileSidebar } from "../layout/mobile-sidebar";
import { Profile } from "../layout/profile";

type Props = {
  name?: string;
};

export const AdminHeader: FC<Props> = ({ name }) => {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link href="/admin">
            <Icons.logo className="mr-2 h-6 w-6" />
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <Profile />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
