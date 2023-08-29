import Footer from "@/components/layouts/footer/page";
import Navbar from "@/components/layouts/navbar/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
            {children}
          <Footer />
        </body>
      </html>
    
  );
}

export default RootLayout;
