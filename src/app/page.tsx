import Link from "next/link";
import { Fragment } from "react";
import Encryption from "~/components/Encryption";
import About from "~/components/about/about.component";
import Fyq from "~/components/fyq/fyq.component";
import HomeImages from "~/components/home-imgs/home-images.component";
import HomeComponent from "~/components/home/Home.component";
import Navigation from "~/components/navigation/navigation.component";
import NewsLetter from "~/components/newsletter/newsletter.component";

export default function HomePage() {
  return (
    <div className="bg-[#030014] text-white font-jetbrains_mono">
            <HomeComponent />
            <About />
            <Encryption/>
        </div>
  );
}
