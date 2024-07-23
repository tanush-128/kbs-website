"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "lucide-react";

const Navigation: React.FC = () => {
  const { data, status } = useSession();
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 z-50 flex w-full flex-wrap font-jetbrains_mono text-sm md:flex-nowrap md:justify-start">
      <nav
        className="relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px] border border-gray-700 bg-gray-800 bg-opacity-80 px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <div
              className="flex-none cursor-pointer text-xl font-bold text-white"
              aria-label="Brand"
            >
              K
              <span className="bg-gradient-to-tl from-green-800 to-green-400 bg-clip-text text-transparent">
                B
              </span>
              S
            </div>
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-white 
                            hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden h-4 w-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden h-4 w-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7">
            <Link href="/" passHref>
              <div
                className="cursor-pointer font-medium text-gray-400 hover:text-gray-500 md:py-6"
                aria-current="page"
              >
                Home
              </div>
            </Link>
            <Link href="/events" passHref>
              <div className="cursor-pointer font-medium text-gray-400 hover:text-gray-500 md:py-6">
                Events
              </div>
            </Link>
            <Link href="/blogs" passHref>
              <div className="cursor-pointer font-medium text-gray-400 hover:text-gray-500 md:py-6">
                Blogs
              </div>
            </Link>
            <Link href="/team" passHref>
              <div className="cursor-pointer font-medium text-gray-400 hover:text-gray-500 md:py-6">
                Team
              </div>
            </Link>
            {status === "authenticated" ? (
              <>
                <div className="font-medium text-gray-400 hover:text-gray-500 md:py-6">
                  {data.user.email}
                </div>
                <button
                  className="flex items-center justify-center gap-x-2 font-medium text-gray-400 hover:text-green-500 hover:text-green-700 md:my-6 md:border-s md:border-gray-300 md:ps-6"
                  onClick={handleSignOut}
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => signIn("google")}>
                <div className="flex cursor-pointer items-center justify-center gap-x-2 font-medium text-gray-400 hover:text-green-500 hover:text-green-700 md:my-6 md:border-s md:border-gray-300 md:ps-6">
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  SignIn
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
