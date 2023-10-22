import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import { ConfigProvider, ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "#28C0E9",
      algorithm: true,
    },
    Input: {
      colorPrimary: "#28C0E9",
      algorithm: true,
    },
    DatePicker: {
      colorPrimary: "#28C0E9",
      algorithm: true,
    },
  },
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={theme}>
          <Header />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
