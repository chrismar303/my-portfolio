import { NavLink } from 'react-router-dom';
import backgroundImg from '../landing.jpg';

const Home = () => {
    return (
        <main className="px-6 lg:p-0">
            <section className="py-12 md:flex">
                {/* left / top */}
                <div className="flex items-center justify-center w-full py-8 md:h-128 md:w-1/2">
                    <div className="max-w-xl">
                        <h4 className="text-sm font-semibold text-red-500">Imagine. Design. Develop.</h4>
                        <h1 className="text-2xl font-semibold text-gray-800 mt-4 md:text-3xl lg:text-4xl">Chrismar</h1>
                        <h4 className="text-gray-400"><em>Developer and <span className="text-red-600">Dream-builder</span></em></h4>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">I make your dreams come true. Message me and realize your dream!</p>
                        
                        {/* Button links */}
                        <div className="flex mt-6">
                            <a class="block px-6 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500">
                                Resume
                            </a>
                            <NavLink to={"/projects"} class="block px-6 py-2 mx-4 text-xs font-semibold text-red-600 transition-colors duration-200 transform border border-red-600 rounded-md hover:bg-red-500">
                                Projects
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* right / bottom */}
                <div className="relative w-full h-64 md:w-1/2 md:h-auto">
                    <div className="absolute w-full h-full bg-black opacity-25"></div>
                    <img className="w-full h-full bg-cover" src={backgroundImg} alt="beach"/>
                </div>
            </section>
        </main>
    )
}

export default Home;