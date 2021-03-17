import { Link } from "react-scroll";
import meImg from '../assets/images/me.jpg';
import SocialLinks from './SocialLinks';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <main id="home" className="px-6 border-b-2 min-h-screen">
            {/* <section className="py-12 lg:flex lg:py-32"> */}
            <section className="flex flex-col h-screen  py-20 lg:py-32 lg:flex-row">
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
        // <div className="flex w-full items-center justify-center w-full py-8 md:h-128 md:w-1/2">
        <div className="flex flex-1 w-full items-center justify-center w-full">
            <div>
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
        // <div className="flex justify-center relative w-full md:w-1/2 md:h-full">
        <div className="flex flex-col items-center py-8 md:py-4 flex-1 h-full  justify-center relative w-full ">
            {/* <div className="absolute w-full h-full bg-black opacity-25"></div> */}
            <div className="rounded-full overflow-hidden">
                <img className="h-40 md:h-64 lg:h-96 object-scale-down" src={meImg} alt="beach"/>
            </div>
            <div><h3>me</h3></div>
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
            <a class="block px-6 py-2 text-xs font-semibold text-white bg-red-500 rounded-md hover:bg-red-400 lg:transform lg:hover:scale-110 lg:duration-500">
                Resume
            </a>
            <Link to={"projects"} spy={true} smooth={true} offset={0} duration={1250} className="block px-6 py-2 mx-4 text-xs font-semibold text-red-600  border border-red-600 rounded-md hover:bg-red-500 hover:text-white cursor-pointer lg:transform lg:hover:scale-110 lg:duration-500">
                Projects
            </Link>
        </div>
    )
}

export default Home;