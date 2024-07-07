import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Navigation from "~/components/navigation/navigation.component";
import Footer from "~/components/footer/footer.component";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "~/provider/AuthProvider";

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
    <AuthProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
