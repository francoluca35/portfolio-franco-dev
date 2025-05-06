import "./globals.css";

export const metadata = {
  title: "Franco Parera | Portfolio",
  description: "Desarrollador Web Fullstack - Portfolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}