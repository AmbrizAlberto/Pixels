// Home/Layout.jsx

import { Inter } from "next/font/google";
import ClientProvider from "../components/ClientProvider"; // Importa el nuevo componente
import "../../public/css/LoginRegisterForm.css"
import "../../public/css/main.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
