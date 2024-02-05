import { useNavigate } from "react-router-dom";

const Navigation = () => {


    const navigate = useNavigate();
     
    const redirectToHome = () => {
        navigate('/');
    }
    
    const redirectToAbout = () => {
        navigate('/about');
    }

    const redirectToEvents = () => {
        navigate('/events');
    }

    const redirectToBlogs = () => {
        navigate('/blogs');
    }

    const redirectToTeam = () => {
        navigate('/team');
    }

    const redirectToSignIn = () => {
        navigate('/signin');
    }


    return (
        <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm fixed top-0">
            <nav class="mt-6 relative max-w-[85rem] w-full bg-gray-800  border border-gray-700 bg-opacity-80 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
                <div class="flex items-center justify-between">
                    <button class="flex-none text-xl font-bold text-white" onClick={redirectToHome} aria-label="Brand">K<span class="bg-clip-text bg-gradient-to-tl from-green-800 to-green-400 text-transparent">B</span>S</button>
                    <div class="md:hidden">
                        <button type="button" class="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-700 text-white 
                            hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        <button class="font-medium text-gray-400  md:py-6 hover:text-gray-500" onClick={redirectToHome} aria-current="page">
                            Home

                        </button>
                        <button class="font-medium text-gray-400  md:py-6 hover:text-gray-500" onClick={redirectToAbout}>

                            About
                        </button>
                        <button class="font-medium text-gray-400  md:py-6 hover:text-gray-500" onClick={redirectToEvents}>
                            Events
                        </button>
                        <button class="font-medium text-gray-400  md:py-6 hover:text-gray-500" onClick={redirectToBlogs}>
                            Blogs
                        </button>
                        <button class="font-medium text-gray-400  md:py-6 hover:text-gray-500" onClick={redirectToTeam}>
                            Team
                        </button>
                        <button class="flex justify-center items-center gap-x-2 font-medium text-gray-400 hover:text-green-700 md:border-s md:border-gray-300 md:my-6 md:ps-6 hover:text-green-500" onClick={redirectToSignIn}>
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            Sign in
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Navigation;