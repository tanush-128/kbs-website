const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[85rem] bg-[#030014] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex justify-between">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-4xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Community &
            <br />
            Networking
          </a>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/company/blockchainkgp"
            className="mx-2 rounded border  p-4 font-bold text-white shadow-lg shadow-white"
          >
            <div className="flex items-center">
              <img src="linkedin.png" alt="" className="z-100 w-10 " />
              <span className="px-5 ">LinkedIn</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/blockchainkgp/"
            className="mx-2 rounded border  p-4 font-bold  text-white shadow-lg shadow-white"
          >
            <div className="flex items-center">
              <img src="instagram.png" alt="" className="z-100 w-10" />
              <span className="px-5">Instagram</span>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-10 flex justify-between">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <p className="text-2xl  font-bold text-white" aria-label="Brand">
            Kharagpur
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent ">
              {" "}
              Blockchain{" "}
            </span>
            Society
          </p>
          <p className="text-[#ffffff6c]">
            A student-run society promoting the use of web3 technologies
          </p>
        </div>
        <div className="flex flex-col items-end text-white">
          <p className=" text-2xl">Contacts</p>
          <p className="text-[#ffffff6c]">+91 8101199607</p>
          <p className="text-[#ffffff6c]">kgpchain@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
