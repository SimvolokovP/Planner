"use client";

import { Tabs } from "@/UI/Tabs";
import { useState } from "react";

export function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-[8px] md:gap-[16px] max-w-[384px] w-full">
        <Tabs
          activeTab={activeTab as string}
          tabsList={[
            { value: "login", label: "Login" },
            { value: "register", label: "Register" },
          ]}
          onTabChange={(v: string) => setActiveTab(v as "login" | "register")}
        />
        <div>
          <form className="bg-card rounded-xl border-1 border-border overflow-hidden p-6 w-full">
            {activeTab === "register" && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2`}
                />
                {/* {errors.name && (
                    <p className="mt-1 text-sm text-[var(--color-error)]">
                      {errors.name}
                    </p>
                  )} */}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2`}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[var(--color-secondary)] hover:bg-amber-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
            >
              {activeTab === "login" ? "Войти" : "Зарегистрироваться"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
