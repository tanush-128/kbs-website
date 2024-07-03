const Footer = () => {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#030014]">
            <div className="mb-10 flex justify-between">
                <div className="col-span-full hidden lg:col-span-1 lg:block">
                    <a className="flex-none text-4xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#" aria-label="Brand">
                        Community &
                        <br />
                        Networking
                    </a>
                </div>
                <div className="flex">
                    <a href="https://www.linkedin.com/company/blockchainkgp" className="text-white font-bold mx-2  p-4 rounded border shadow-lg shadow-white">
                        <div className="flex items-center">
                            <img src="linkedin.png" alt="" className="w-10 z-100 " />
                            <span className="px-5 ">
                                LinkedIn
                            </span>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/blockchainkgp/" className="text-white font-bold mx-2  p-4 rounded  border shadow-lg shadow-white">
                        <div className="flex items-center">
                            <img src="instagram.png" alt="" className="w-10 z-100" />
                            <span className="px-5">
                                Instagram
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mb-10 flex justify-between">
                <div className="col-span-full hidden lg:col-span-1 lg:block">
                    <p className="text-2xl  text-white font-bold" href="#" aria-label="Brand">
                        Kharagpur

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 ">
                            {" "}
                            Blockchain
                            {" "}
                        </span>

                        Society
                    </p>
                    <p className="text-[#ffffff6c]">
                        A student-run society promoting the use of web3 technologies
                    </p>
                </div>
                <div className="flex text-white flex-col items-end">
                    <p className=" text-2xl">Contacts</p>
                    <p className="text-[#ffffff6c]">
                        +91 8101199607
                    </p>
                    <p className="text-[#ffffff6c]">
                        kgpchain@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;