import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KaZoom - Kids' Ebook Store",
    description:
        "A delightful collection of ebooks for children, featuring interactive stories and educational content.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "KaZoom - Kids' Ebook Store",
        description:
            "A delightful collection of ebooks for children, featuring interactive stories and educational content.",
        url: "https://kazoom.ink",
        siteName: "KaZoom",
        images: [
            {
                url: "https://kazoom.ink/kids.jpg",
                width: 1200,
                height: 630,
                alt: "KaZoom",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
