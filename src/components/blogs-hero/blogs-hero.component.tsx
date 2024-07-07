import Link from "next/link";

const BlogsHero = ({
  tags,
  searchTerm,
  setSearchTerm,
}: {
  tags: string[];
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) => {
  return (
    <div
      className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 
        before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] before:bg-cover before:bg-top 
        before:bg-no-repeat"
    >
      <div className="mx-auto mt-20 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-200 sm:text-6xl">
            KBS Blogs
          </h1>

          <p className="mt-3 text-gray-400">
            Learn about Blockchain, Cryptocurrency, and DeFi.
          </p>

          <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
            <form>
              <div className="relative z-10 flex space-x-3 rounded-lg border border-gray-700 bg-slate-900  p-3 shadow-lg shadow-gray-900/[.2]">
                <div className="flex-[1_0_0%]">
                  <label
                    htmlFor="hs-search-article-1"
                    className="block text-sm font-medium text-gray-700 text-white"
                  >
                    <span className="sr-only">Search article</span>
                  </label>
                  <input
                    type="email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    name="hs-search-article-1"
                    id="hs-search-article-1"
                    className="block w-full rounded-lg border-transparent bg-slate-900 px-4 py-2.5 text-gray-400 focus:border-green-500  focus:ring-gray-600 focus:ring-green-500"
                    placeholder="Search Blogs"
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <a
                    className="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-green-600 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </form>

            <div className="absolute end-0 top-0 hidden -translate-y-12 translate-x-20 md:block">
              <svg
                className="h-auto w-16 text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
              <svg
                className="h-auto w-40 text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href="#"
                className="m-1 inline-flex items-center gap-x-2 rounded-lg border border-gray-700 bg-slate-900 px-4 py-3 text-sm  text-white shadow-sm hover:bg-gray-800  focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
