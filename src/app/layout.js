import { Inter } from "next/font/google";
import "./globals.css";
import MainWrapper from "./components/MainWrapper";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragos Alexa",
  description: "Dragos Alexa Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainWrapper>{children}</MainWrapper>
        
      </body>
    </html>
  );
}
