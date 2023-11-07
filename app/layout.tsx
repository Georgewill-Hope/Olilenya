import "./globals.css";
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import { Navbar, Footer } from "../components";

// const inter = Poppins({ subsets: ["latin"], weight:"500",});

export const metadata: Metadata = {
  title: "Georgewill",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>

        <main className="w-full max-w-6xl mx-auto lg:px-10">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
