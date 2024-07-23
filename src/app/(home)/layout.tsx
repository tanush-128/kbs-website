import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Footer from "~/components/footer/footer.component";
import Navigation from "~/components/navigation/navigation.component";
import AuthProvider from "~/provider/AuthProvider";

import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
});

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
      <html lang="en" className={`${jetbrains_mono.className} dark`}>
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
