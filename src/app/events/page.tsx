import EventHero from "~/components/event-hero/eventHero.component";
import EventsContainer from "~/components/events-card-container/eventsContainer";


const EventRoute = () => {
    return (
        <div className="font-source_code_pro">
            <EventHero />
            <EventsContainer/>
            {/* 
             */}
        </div>
    )
}

export default EventRoute;