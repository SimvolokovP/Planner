"use client";

import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { Tabs } from "@/UI/Tabs";
import { useState } from "react";

export function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex items-center justify-center container">
      <div className="flex flex-col gap-1 md:gap-2 max-w-[384px] w-full">
        <Tabs
          activeTab={activeTab as string}
          tabsList={[
            { value: "login", label: "Login" },
            { value: "register", label: "Register" },
          ]}
          onTabChange={(v: string) => setActiveTab(v as "login" | "register")}
        />
        <div className="bg-card rounded-xl border-1 border-border overflow-hidden p-6 w-full flex flex-col gap-6">
          <div>
            <div className="font-semibold">Title</div>
            <p className="text-muted-foreground text-sm">
              Change your password here. After saving, youll be logged out.
            </p>
          </div>
          {activeTab === "login" && <LoginForm />}
          {activeTab === "register" && <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
