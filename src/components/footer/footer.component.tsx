import Link from "next/link";
import { RiArrowDropRightLine, RiInstagramFill } from "react-icons/ri";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuArrowDownRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-20 w-full max-w-[85rem] overflow-hidden border-t px-4 pt-10 font-jetbrains_mono sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none font-rethink_sans text-4xl text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Community &
            <br />
            Networking
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:max-w-[60%] lg:justify-end">
          <a
            href="https://www.linkedin.com/company/blockchainkgp"
            className="rounded border p-3 font-bold text-white hover:border-green-400 hover:text-green-400"
          >
            <div className="flex items-center">
              <div className="rounded-full bg-[#151a21] p-4">
                <FaLinkedin className="text-2xl" />
              </div>
              <span className="px-5 ">LinkedIn</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://www.instagram.com/blockchainkgp/"
            className="rounded border p-3 font-bold text-white hover:border-green-400 hover:text-green-400"
          >
            <div className="flex items-center">
              <div className="rounded-full bg-[rgb(21,26,33)] p-4">
                <RiInstagramFill className="text-2xl" />
              </div>
              <span className="px-5">Instagram</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://www.facebook.com/blockchainkgp"
            className="rounded border p-3 font-bold text-white hover:border-green-400 hover:text-green-400"
          >
            <div className="flex items-center">
              <div className="rounded-full bg-[#151a21] p-4">
                <FaFacebook className="text-2xl" />
              </div>
              <span className="px-5">Facebook</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://discord.gg/Pwrv4Vzx"
            className="rounded border p-3 font-bold text-white hover:border-green-400 hover:text-green-400"
          >
            <div className="flex items-center">
              <div className="rounded-full bg-[#151a21] p-4">
                <FaDiscord className="text-2xl" />
              </div>
              <span className="px-5">Discord</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://chat.whatsapp.com/EBtsUCmzHRICqtOlXHzk2J"
            className="rounded border p-3 font-bold text-white hover:border-green-400 hover:text-green-400"
          >
            <div className="flex items-center">
              <div className="rounded-full bg-[#151a21] p-4">
                <IoLogoWhatsapp className="text-2xl" />
              </div>
              <span className="px-5">Whatsapp</span>
              <LuArrowDownRight />
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <div className="col-span-full hidden w-[30%] lg:col-span-1 lg:block">
          <h1 className="block font-inter text-2xl font-bold text-gray-100">
            Kharagpur <br />
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Blockchain
            </span>
            <br />
            Society
          </h1>
          <p className="mt-4 text-[#66798a]">
            A student-run society promoting the use of web3 technologies
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Quick links</h2>
          <div className="mt-2 flex flex-col gap-2 text-[#66798a]">
            <Link href="/" className="hover:text-green-400">
              <RiArrowDropRightLine className="inline-flex" />
              Home
            </Link>
            <Link href="/about" className="hover:text-green-400">
              <RiArrowDropRightLine className="inline-flex" />
              About
            </Link>
            <Link href="/events" className="hover:text-green-400">
              <RiArrowDropRightLine className="inline-flex" />
              Events
            </Link>
            <Link href="blogs" className="hover:text-green-400">
              <RiArrowDropRightLine className="inline-flex" />
              Blogs
            </Link>
            <Link href="/team" className="hover:text-green-400">
              <RiArrowDropRightLine className="inline-flex" />
              Team
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end text-white">
          <p className="mb-2 text-2xl">Contacts</p>
          <p className="text-[#66798a]">+91-8101199607</p>
          <p className="text-[#66798a]">kgpchain@gmail.com</p>
        </div>
      </div>
      <div className="border-t py-4 text-center">
        <p className="text-[#66798a]">&copy; 2024 KBS. All rights reserved.</p>
      </div>
      <div className="green__gradient absolute -bottom-[50%] left-[10rem] z-[-1] h-full  w-[74%]"></div>
    </footer>
  );
};

export default Footer;
