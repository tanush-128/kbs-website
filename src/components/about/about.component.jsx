import AboutImg from "../../assets/img/about.jpeg"

const About = () => {
    return (
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-44" id="about">

            <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div class="lg:col-span-3">
                    <h1 class="block text-5xl font-bold  md:text-5xl lg:text-6xl text-white  mb-10 text-right">About <span className="font-boult text-green-400"> <br />Kgp's</span> Chain</h1>
                    <p class="mt-3 text-lg text-gray-400">We are a dynamic community of passionate students dedicated to exploring, understanding, and shaping the future of decentralized technologies. At the intersection of education and innovation, we strive to empower minds, foster collaboration, and drive the adoption of blockchain and web3 solutions.</p>
                    <p class="mt-3 text-lg text-gray-400">Our mission is to bridge the gap between curiosity and mastery in the world of blockchain. Through workshops, events, and hands-on experiences, we aim to demystify the complexities of decentralized technologies, inspire innovation, and nurture the next generation of blockchain enthusiasts.</p>
                    <p class="mt-3 text-lg text-gray-400">From blockchain workshops and symposiums to collaborative projects and networking events, we provide a platform for students to dive deep into the world of blockchain. We believe in the transformative power of education and hands-on learning, and our initiatives reflect this commitment to excellence.</p>
                </div>

                <div class="lg:col-span-4 mt-10 lg:mt-0">
                    <img class="w-full rounded-xl" src={AboutImg} alt="Image Description" />
                </div>
            </div>
        </div>
    )
}


export default About;