"use client";
import ChatConfig from "@/components/chat/chat-settings";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
   return (
    <div className="min-h-screen xl:flex"> 
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ml-0`}
      >
     <ChatConfig/>
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}
