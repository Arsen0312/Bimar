import type {Metadata} from "next";
// import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/widget/Header/ui/Header";
import Footer from "@/widget/Footer/ui/Footer";
import React from "react";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Bimar",
    description: "BIMAR — сеть супермаркетов в Бишкеке и по Кыргызстану. Свежие продукты, халал мясо, турецкие деликатесы, готовые блюда, акции, бонусы и удобное приложение.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body
            className={`
             w-full`}
            style={{ background: "#F6F4F2" }}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
