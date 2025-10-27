import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bookish",
  description: "Where every page begins a journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${libre.className}`}>{children}</body>
    </html>
  );
}
