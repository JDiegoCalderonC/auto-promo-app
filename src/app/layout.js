import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Auto Promo Bogotá",
  description: "Regístrate para tener la oportunidad de ganar en el sorteo exclusivo de Auto Promo Bogotá.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
