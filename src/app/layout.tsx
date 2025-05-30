import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/modules/shared/components/header/header";
import { Footer } from "@/modules/shared/components/footer/footer";
import { NuqsAdapter } from "nuqs/adapters/next";
import { ModalWrapper } from "@/modules/shared/components/modals/modal-wrapper";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
${geistSans.variable} ${geistMono.variable} 
*/
export const metadata: Metadata = {
  title: "COLECTAR",
  description: "Hasta que todo sea como lo soñamos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NuqsAdapter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <ModalWrapper />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
