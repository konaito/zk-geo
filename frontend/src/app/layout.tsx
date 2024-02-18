import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
import Script from "next/script";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/">
          <h1 className="text-center m-3 text-dark">zk-geo</h1>
        </Link>
        <div className="d-flex justify-content-center">
          <div className="content">
            {children}
          </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
      </body>
    </html>
  );
}