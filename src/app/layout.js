import "./globals.css";
import "./burger.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export const metadata = {
  title: "Dr. Moanack",
  description: "Consulta al mejor urólogo de Caracas",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className="scrollbar-thin scrollbar-track-moanackDarkGrey scrollbar-thumb-moanackGrey scroll-smooth min-h-screen antialiased"
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>|
  );
}
