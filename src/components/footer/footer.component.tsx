import Link from "next/link";
import { RiArrowDropRightLine, RiInstagramFill } from "react-icons/ri";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuArrowDownRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[85rem] border-t mt-20 px-4 pt-10 sm:px-6 lg:px-8 relative overflow-hidden font-jetbrains_mono">
      <div className="flex justify-between">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="font-rethink_sans flex-none text-4xl text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Community &
            <br />
            Networking
          </a>
        </div>
        <div className="flex flex-wrap justify-end gap-6 w-[60%]">
          <a
            href="https://www.linkedin.com/company/blockchainkgp"
            className="rounded border p-3 font-bold text-white hover:text-green-400 hover:border-green-400"
          >
            <div className="flex items-center">
              <div className="bg-[#151a21] p-4 rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <span className="px-5 ">LinkedIn</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://www.instagram.com/blockchainkgp/"
            className="rounded border p-3 font-bold text-white hover:text-green-400 hover:border-green-400"
          >
            <div className="flex items-center">
              <div className="bg-[rgb(21,26,33)] p-4 rounded-full">
                <RiInstagramFill className="text-2xl" />
              </div>
              <span className="px-5">Instagram</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://www.facebook.com/blockchainkgp"
            className="rounded border p-3 font-bold text-white hover:text-green-400 hover:border-green-400"
          >
            <div className="flex items-center">
              <div className="bg-[#151a21] p-4 rounded-full">
                <FaFacebook className="text-2xl" />
              </div>
              <span className="px-5">Facebook</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://discord.gg/Pwrv4Vzx"
            className="rounded border p-3 font-bold text-white hover:text-green-400 hover:border-green-400"
          >
            <div className="flex items-center">
              <div className="bg-[#151a21] p-4 rounded-full">
                <FaDiscord className="text-2xl" />
              </div>
              <span className="px-5">Discord</span>
              <LuArrowDownRight />
            </div>
          </a>
          <a
            href="https://chat.whatsapp.com/EBtsUCmzHRICqtOlXHzk2J"
            className="rounded border p-3 font-bold text-white hover:text-green-400 hover:border-green-400"
          >
            <div className="flex items-center">
              <div className="bg-[#151a21] p-4 rounded-full">
                <IoLogoWhatsapp className="text-2xl" />
              </div>
              <span className="px-5">Whatsapp</span>
              <LuArrowDownRight />
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block w-[30%]">
          <h1 className="block font-bold text-2xl text-gray-100 font-inter">
            Kharagpur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
              Blockchain
            </span>
            <br />
            Society
          </h1>
          <p className="text-[#66798a] mt-4">
            A student-run society promoting the use of web3 technologies
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Quick links</h2>
          <div className="flex flex-col gap-2 mt-2 text-[#66798a]">
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
      <div className="text-center border-t py-4">
        <p className="text-[#66798a]">&copy; 2024 KBS. All rights reserved.</p>
      </div>
      <div className="absolute z-[-1] left-[10rem] -bottom-[50%] w-[74%] h-full  green__gradient"></div>
    </footer>
  );
};

export default Footer;
