import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "پنل مشتری",
  description: "پنل مدیریتی مشتری",
};

export default function RootLayout({ children }: LayoutProps<"/customer">) {
  return (
    <div className="min-h-full flex flex-col">
      <h1>پنل مشتری</h1>
      <div className="flex w-full">
        <aside className="w-1/5 border-1 border-gray-400  rounded-sm p-4">
          <ul className="flex flex-col">
            <Link href="/customer">داشبورد</Link>
            <Link href="/customer/containers">کانتینر ها</Link>
            <Link href="/customer/invoices">صورت حساب ها</Link>
          </ul>
        </aside>

        <section
          className="w-full border-1 border-gray-400
          rounded-sm p-4"
        >
          {children}
        </section>
      </div>
      <footer>customer footer</footer>
    </div>
  );
}
