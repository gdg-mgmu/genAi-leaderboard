import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGM University - Chhatrapati Sambhaji Nagar",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDG MGMU Jams.",
  keywords: ["gccp", "jams", "jnec", "udict", "gdgmgmu"],
  robots: "index,follow",

  "og:title": "GDG MGM University Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDG MGMU Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDG MGMU Leaderboard",
  "twitter:description": "This is the leaderboard for the GDG MGMU Jams.",
  "twitter:image": "",
  "twitter:site": "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>

      {/*<body>*/}

      {/*  <div className="w-full  shadow-md relative ">*/}
      {/*      <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-10 flex justify-center items-center">*/}
      {/*          <h1 className="text-white">*/}
      {/*            Server Down | Please try again later 😢?*/}
      {/*</h1>*/}

      {/*      </div>*/}
      {/*  </div>*/}
      {/*</body>*/}
    </html>
  );
}
