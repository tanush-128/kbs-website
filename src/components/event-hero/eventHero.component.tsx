const EventHero = () => {
  return (
    <div
      className="relative overflow-hidden pt-20 before:absolute before:start-1/2 before:top-0 
        before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] before:bg-cover before:bg-top 
        before:bg-no-repeat"
    >
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 sm:pb-10  sm:pt-24 lg:px-8">
        <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Upcoming & Past Events
          </h1>

          <p className="mt-3 text-gray-400">
            Join us on a journey of discovery and collaboration at the forefront
            of web3 technology.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-10 max-w-6xl px-4  sm:px-6 sm:pb-10 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white md:text-3xl md:leading-tight">
              Don&apos;t want to miss the next event? <br />
              Don&apos;t worry we will Email you.
            </h2>
          </div>

          <form>
            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
              <div className="w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="email"
                  id="hero-input"
                  name="hero-input"
                  className="block w-full rounded-lg border-gray-700  bg-slate-900 px-4 py-3 text-sm text-gray-400 focus:border-green-500 focus:ring-gray-600 focus:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              <a
                className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                href="#"
              >
                Regester
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
