import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { DashboardNav } from "../layout/ThemeToggle/dashboard-nav";
import { AdminNavItems } from "@/constants";

type Props = {};

export const AdminSidebar: FC<Props> = () => {
  const year = new Date().getFullYear();
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={AdminNavItems} />
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <div className="text-sm w-full absolute bottom-80 text-center">
          &copy; {year} LOGO
        </div>
      </div>
    </nav>
  );
};
