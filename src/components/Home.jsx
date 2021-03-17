import { NavHashLink } from 'react-router-hash-link';
import backgroundImg from '../assets/images/landing.jpg';
import SocialLinks from './SocialLinks';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <main id="home" className="px-6 border-b-2 lg:p-0 min-h-screen">
            <section className="pt-12 md:flex lg:pt-32">
                {/* left / top */}
                <HomeLeft />
                {/* right / bottom */}
                <HomeRight />  
            </section>
        </main>
    )
}

function HomeLeft() {
    return (
        <div className="flex items-center justify-center w-full py-8 md:h-128 md:w-1/2">
            <div className="max-w-xl">
                {/* Hero  */}
                <HomeHero />

                {/* Details */}
                <HomeDetails />

                {/* Socials */}
                <HomeSocials />
                
                {/* Button links */}
                <HomeButtons />
            </div>
        </div>
    )
}

function HomeRight() {
    return (
        <div className="relative w-full h-64 md:w-1/2 md:h-auto">
            <div className="absolute w-full h-full bg-black opacity-25"></div>
            <img className="w-full h-full bg-cover" src={backgroundImg} alt="beach"/>
        </div>
    )
}

function HomeHero() {
    return (
        <div>
            <h4 className="text-sm font-semibold text-red-500">Imagine. Design. Develop.</h4>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4 md:text-3xl lg:text-4xl">Chrismar</h1>
            <h4 className="text-gray-400"><em>Developer and <span className="text-red-600">Dream-builder</span></em></h4>
            <p className="mt-2 text-sm text-gray-500 md:text-base">I make your dreams come true. Message me and realize your dream!</p>
        </div>      
    )
}

function HomeDetails() {
    return (
        <div className="py-4 flex flex-col gap-2">
            <DetailItem icon={<FaPhoneAlt />} text="1 (555) 555-5555" />            
            <DetailItem icon={<FaEnvelope />} text="chrismar-dev@gmail.com" />            
            <DetailItem icon={<FaMapMarkerAlt />} text="Los Angeles & Orange Country Area" />            
        </div>
    )
}
function DetailItem({ text, icon }) {
    return (
        <div className="flex gap-2 items-center text-sm">
            <span className="text-red-600">{icon}</span>
            <span className="text-gray-500">{text}</span>
        </div>
    )
}


function HomeSocials() {
    return (
        <div className="text-xs mt-4" >
            <SocialLinks spacing={3} />
        </div>
    )
}

function HomeButtons() {
    return (
        <div className="flex mt-6">
            <a class="block px-6 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400">
                Resume
            </a>
            <NavHashLink to={"/#projects"} className="block px-6 py-2 mx-4 text-xs font-semibold text-red-600 transition-colors duration-200 transform border border-red-600 rounded-md hover:bg-red-500 hover:text-white">
                Projects
            </NavHashLink>
        </div>
    )
}

export default Home;