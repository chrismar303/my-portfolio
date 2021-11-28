import { Link } from "react-scroll";
import SocialLinks from '../../components/SocialLinks';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const HomeMain = () => {
    return (
        <div className="flex flex-1 w-full items-center justify-center w-full">
            <div>
                {/* Hero  */}
                <Hero />

                {/* Details */}
                <Details />

                {/* Socials */}
                <Socials />
                
                {/* Button links */}
                <Buttons />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div>
            <h4 className="text-sm font-semibold text-red-500">Imagine. Design. Develop.</h4>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4 md:text-3xl lg:text-4xl">Chrismar</h1>
            <h4 className="text-gray-400"><em>Developer and <span className="text-red-600">Dream-builder</span></em></h4>
            <p className="mt-2 text-sm text-gray-500 md:text-base">I make your dreams come true. Message me and realize your dream!</p>
        </div>      
    )
}

function Details() {
    const Detail = ({ text, icon }) => {
        return (
            <div className="flex gap-2 items-center text-sm">
                <span className="text-red-600">{icon}</span>
                <span className="text-gray-500">{text}</span>
            </div>
        )
    }
    
    return (
        <div className="py-4 flex flex-col gap-2">
            <Detail icon={<FaPhoneAlt />} text="1 (555) 555-5555" />            
            <Detail icon={<FaEnvelope />} text="chrismar-dev@gmail.com" />            
            <Detail icon={<FaMapMarkerAlt />} text="Los Angeles & Orange Country Area" />            
        </div>
    )
}



function Socials() {
    return (
        <div className="text-xs mt-4" >
            <SocialLinks spacing={3} />
        </div>
    )
}

function Buttons() {
    return (
        <div className="flex mt-6">
            <a href="https://drive.google.com/file/d/1znaGDPEMsCd7Pueh44wgdiE8THTIsBUk/view?usp=sharing" class="block px-6 py-2 text-xs font-semibold text-white bg-red-500 rounded-md hover:bg-red-400 lg:transform lg:hover:scale-110 lg:duration-500">
                Resume
            </a>
            <Link to={"projects"} spy={true} smooth={true} offset={0} duration={1250} className="block px-6 py-2 mx-4 text-xs font-semibold text-red-600  border border-red-600 rounded-md hover:bg-red-500 hover:text-white cursor-pointer lg:transform lg:hover:scale-110 lg:duration-500">
                Projects
            </Link>
        </div>
    )
}

export default HomeMain;