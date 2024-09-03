import { Inter } from "next/font/google";
import "./globals.css";
import {Header, Footer} from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catalina Grajales - Software Engineer",
  description: "Welcome to my Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white text-[#023535]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
