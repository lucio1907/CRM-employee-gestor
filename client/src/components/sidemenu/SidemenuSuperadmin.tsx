import AdminsIcon from "@/svg/AdminsIcon";
import DashboardIcon from "@/svg/DashboardIcon";
import IconSideMenu from "@/svg/IconSideMenu";
import NewAdminIcon from "@/svg/NewAdminIcon";
import Link from "next/link";
import React from "react";

const SidemenuSuperadmin = (): React.ReactElement => {
  return (
    <div className="w-[300px] max-w-[300px] h-dvh bg-slate-50 flex flex-col gap-32">
      <div className="p-5 flex gap-1">
        <IconSideMenu />
        <h1 className="text-[26px] font-semibold">
          Dashboard <span className="text-[10px] font-medium">v0.1</span>
        </h1>
      </div>

      <nav className="flex flex-col justify-center">
        <ul className="font-medium text-[18px] flex flex-col gap-5 px-3">
          <li className="flex gap-1 p-2 py-4 hover:bg-[#5932EA] hover:text-white rounded-[14px] transition-all ease-in duration-100">
            <DashboardIcon />
            <Link href="/dashboard" className="w-full h-full">Dashboard</Link>
          </li>
          <li className="flex gap-1 p-2 py-4 hover:bg-[#5932EA] hover:text-white rounded-[14px] transition-all ease-in duration-100">
            <AdminsIcon />
            <Link href="/admins" className="w-full h-full">Admins</Link>
          </li>
          <li className="flex gap-1 p-2 py-4 hover:bg-[#5932EA] hover:text-white rounded-[14px] transition-all ease-in duration-100">
            <NewAdminIcon/>
            <Link href='/add-admin' className="w-full h-full">Add admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidemenuSuperadmin;
