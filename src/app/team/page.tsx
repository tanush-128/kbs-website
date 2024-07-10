import { founderAdvisors, governorHeads } from '~/assets/js/team-member-data';
import TeamCard from '~/components/team/teamCard.component';


const OurTeam = () => {
    return (
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 
        before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 
        before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] font-jetbrains_mono">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white lg:text-6xl">Our Team</h2>
                    <p className="mt-1 text-gray-400">Team behind KBS</p>
                </div>

                <div>
                    <h3 className='text-center text-2xl font-bold mb-4'>Governor and Heads</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {governorHeads.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>

                    <h3 className='text-center text-2xl font-bold mb-4 mt-16'>Founder and Advisors</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {founderAdvisors.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute -right-[40%] bottom-[40%] w-[50%] h-[35%] rounded-full blue__gradient"></div>
            <div className="absolute -left-[40%] top-[40%] w-[50%] h-[35%] rounded-full blue__gradient"></div>
        </div>

    );
}

export default OurTeam;