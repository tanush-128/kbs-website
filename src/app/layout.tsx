
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Navigation from "~/components/navigation/navigation.component";
import Footer from "~/components/footer/footer.component";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "~/provider/AuthProvider";
import { Inter, Rethink_Sans, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains-mono'
})

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-rethink-sans'
})

export const metadata = {
  title: "KBS",
  description: "Kharagpur Blockchain Society",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider >
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <body className={`${inter.variable} ${jetbrains_mono.variable} ${rethink_sans.variable} overflow-x-clip`}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider >

  );
}
