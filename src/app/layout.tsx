"use client";

import { Provider } from "react-redux";
import "./globals.css";
import Navbar from "@/component/navbar";
import store from "@/store/store";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <Provider store={store}>
                    <Navbar />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
