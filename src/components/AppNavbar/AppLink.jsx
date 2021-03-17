import { Link } from "react-scroll";

const AppLink = ({ text, to, onClick }) => {
    return (
        <Link to={to} spy={true} smooth={true} offset={0} duration={1250} onClick={onClick} activeClass="border-b-2 border-red-500 lg:bg-red-500 lg:text-white" className="w-full py-4 px-3  text-center hover:text-white hover:bg-red-600 rounded-sm transition ease-in duration-300 cursor-pointer lg:px-4 lg:py-3">
            {text}
        </Link>
    )
}

export default AppLink;