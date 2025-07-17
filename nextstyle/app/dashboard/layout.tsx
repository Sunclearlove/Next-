"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg">
        <Link className={pathname === "/dashboard/about" ? "text-purple-500" : ""} href="/dashboard/about">About</Link>
        <Link className={pathname === "/dashboard/settings" ? "text-purple-500" : ""} href="/dashboard/settings">Settings</Link>
      </div>
      <h2>Dashboard Layout    {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={ () => setCount(count + 1)}>Increment</button>
      { children }
    </div>
  );
}