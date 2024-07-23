import EventHero from "~/components/event-hero/eventHero.component";
import EventsContainer from "~/components/events-card-container/eventsContainer";



const EventRoute = () => {
    return (
        <div className="font-jetbrains_mono relative overflow-hidden">
            <EventHero />
            <EventsContainer />
            <div className="absolute -right-[70%] top-0 w-[80%] h-[85%] rounded-full blue__gradient z-[-1]"></div>
            <div className="absolute -left-[70%] bottom-[10%] w-[80%] h-[85%] rounded-full blue__gradient z-[-1]"></div>
        </div>
    )
}

export default EventRoute;