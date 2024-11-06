// Home/Layout.jsx

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Profile Pixels</title>
        <meta name="description" content="El universo de la fotografia"/>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/72/72179.png" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
