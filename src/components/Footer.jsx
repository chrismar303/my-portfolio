import { FaTerminal } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font border-t border-gray">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col lg:w-10/12 ">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="p-3  text-white rounded-full shadow bg-red-500">
                        { <FaTerminal />}
                    </span>
                    <span className="ml-3 text-xl">Chrismar</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    <a href="" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                        © 2021 Chrismar
                    </a>
                </p>
                <div className="mt-5 text-lg lg:mt-0 lg:ml-auto">
                    <SocialLinks spacing={2} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;