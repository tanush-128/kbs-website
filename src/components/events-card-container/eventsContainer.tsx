import "./evt.css";

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
    <div className="group relative flex gap-x-3 rounded-lg py-4 hover:bg-white/10">
      <a className="absolute inset-0 z-[1]" href="#"></a>
      <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-0 after:w-px after:-translate-x-[0.5px] after:bg-gray-700 last:after:hidden group-hover:after:bg-gray-600">
        <div className="relative z-10 flex h-7 w-7 items-center justify-center">
          <div className="h-2 w-2 rounded-full border-2 border-gray-600 bg-gray-800 group-hover:border-gray-600"></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={event.src}
          className="h-36 w-32 rounded-xl group-hover:outline group-hover:outline-2 group-hover:outline-indigo-800 group-hover:brightness-75 "
        ></img>
        <div className="grow p-2 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-white" id="title">
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-gray-400" id="description">
            {event.description}
          </p>
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
      src: "ss.png",
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
      src: "ss.png",
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
      src: "ss.png",
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
          <div className=" my-4 ps-2">
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
