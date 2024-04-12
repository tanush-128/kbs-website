import { teamMembers } from '../../assets/js/team-member-data'
import OurTeamCard from '../../components/our-team-card/our-team-card.component';

const OurTeam = () => {
    return (
        <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 
        before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 
        before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white lg:text-6xl">Our Team</h2>
                    <p class="mt-1 text-gray-400">Team behind KBS</p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    {teamMembers.map((person) => (
                        <OurTeamCard key={person.id} person={person} />
                    ))}

                </div>
            </div>
        </div>

    );
}

export default OurTeam;