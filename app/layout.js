import { Poppins, Caveat, Indie_Flower } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});
const indie = Indie_Flower({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-indie",
});
export const metadata = {
  title: "FloraVision - Premium Indoor Plants",
  description: "Shop for trendy indoor plants",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${caveat.variable} ${indie.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
