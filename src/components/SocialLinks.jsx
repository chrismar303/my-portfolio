import { FaLinkedinIn, FaGithub, FaRedditAlien, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialLinks = ({ spacing }) => {
    return (
        <span class={`inline-flex flex-wrap ${spacing ? `gap-x-${spacing}` : ''} gap-y-4  justify-center justify-start`}>
            <Social icon={<FaGithub />} color="green" href="https://github.com/chrismar303" />
            <Social icon={<FaEnvelope />} color="red" />
            <Social icon={<FaLinkedinIn />} color="blue"  href="https://www.linkedin.com/in/christian-martinez303/" />
        </span>
    )
}

function Social({ icon, color, inverted, href }) {
    const style = inverted ? `text-white bg-${color}-500` : `text-${color}-500 bg-gray-50`;
    return (
        <a href={href} className={`${style} p-3 rounded-lg shadow flex items-center duration-300 transform hover:scale-125`} target="_blank" rel="noopener noreferrer">
            {icon}
        </a>
    )
}

export default SocialLinks;