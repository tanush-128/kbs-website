
import "./evt.css"

interface Event {
    date: string;
    title: string;
    description: string;
    src: string;
    speaker: {
      name: string;
      image: string;
    };
  }
  
  const EventItem = ({ event }: { event: Event }) => {
    return (
      <div className="group relative flex gap-x-3 rounded-lg hover:bg-white/10">
        <a className="absolute inset-0 z-[1]" href="#"></a>
        <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-0 after:w-px after:-translate-x-[0.5px] after:bg-gray-700 last:after:hidden group-hover:after:bg-gray-600">
          <div className="relative z-10 flex h-7 w-7 items-center justify-center">
            <div className="h-2 w-2 rounded-full border-2 border-gray-600 bg-gray-800 group-hover:border-gray-600"></div>
          
          </div>
        </div>
        <div className="flex items-center ">
        <img src={event.src} className="w-32 h-36 rounded-xl group-hover:brightness-75 group-hover:outline group-hover:outline-2 group-hover:outline-indigo-800 "></img>
        <div className="grow p-2 pb-8">
        <h3 className="flex gap-x-1.5 font-semibold text-white" id="title">
            <svg
              className="mt-1 h-4 w-4 flex-shrink-0"
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
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-gray-400" id="description">{event.description}</p>
          <button
            type="button"
            className="relative z-10 -ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-400 hover:bg-gray-800 hover:shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
          >
            <img
              className="h-4 w-4 flex-shrink-0 rounded-full"
              src={event.speaker.image}
              alt="Image Description"
            />
            {event.speaker.name}
          </button>
        </div>
        </div>
      </div>
    );
  };
  const EventsContainer = () => {
    const events: Event[] = [
      {
        date: "1 Aug, 2023",
        title: "CryptoCraft: Navigating the Blockchain Frontier",
        src:"ss.png",
        description:
          "Join us for an immersive workshop series, exploring the intricacies and innovation of blockchain technology. Unleash your crypto curiosity!",
        speaker: {
          name: "Prakhar Jain",
          image:
            "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
        },
      },
      {
        date: "10 September, 2023",
        title: "Web3 Nexus: Bridging Realities, Transforming Futures",
        src:"ss.png",
        description:
          "A convergence of minds and ideas, where web3 enthusiasts connect to shape the decentralized future. Explore, learn, and innovate.",
        speaker: {
          name: "Prakhar Jain",
          image: "",
        },
      },
      {
        date: "31 Jul, 2023",
        title: "Founding of the Society",
        description: "Some Enthusiast people founded the society.",
        src:"ss.png",
        speaker: {
          name: "Prakhar Jain",
          image: "",
        },
      },
    ];
  
    return (
      <div className="flex flex-col pb-10 lg:ml-96 lg:mr-96 lg:mt-0 ">
        {events.map((event, index) => (
          <div key={index}>
            <div className="my-2 ps-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-400">
                {event.date}
              </h3>
            </div>
            <EventItem event={event} />
          </div>
        ))}
      </div>
    );
  };
  
  export default EventsContainer;
  