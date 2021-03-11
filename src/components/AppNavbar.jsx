import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md'
// BiMenu

const AppNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white text-black w-full shadow">
            <nav className="items-center lg:flex lg:items-center lg:justify-between lg:w-10/12 lg:mx-auto lg:py-3">
                {/* logo */}
                <div className="flex p-3 text-red-500 relative">
                    <h2 className="mx-auto text-xl font-bold">CTech</h2>
                    <span
                        className="absolute top-0 left-0 h-full w-full text-xl flex justify-end pr-3 items-center text-gray-500 lg:hidden"
                    >
                        <BiMenu className="cursor-pointer" onClick={() => setOpen(true)} />
                    </span>
                </div>
                {/* main */}
                <div className={`${open ? 'left-0' : '-left-full'} duration-500 ease-in-out fixed bg-white  top-0 w-full h-full z-50 flex flex-col text-4xl  justify-center items-center lg:relative lg:block lg:left-0 lg:text-sm lg:w-max `}>
                    {/* close menu */}
                    <div 
                        onClick={_ => setOpen(false)}
                        className="absolute top-3 right-3 text-4xl text-red-700 cursor-pointer lg:hidden"
                    >
                        <MdClose />
                    </div>
                    <Link text="Home" href="/" exact />
                    <Link text="About" href="/about"  />
                    <Link text="Projects" href="/projects" />
                    <Link text="Post" href="/post"  /> 
                    <Link text="Contact" href="/contact" /> 
                    <SocialLinks />
                </div>
            </nav>
        </header>
    )
   
}

function Link({ text, href, exact }) {
    return (
         <NavLink to={href} exact={exact || false} className="w-full py-6 px-6  text-center text-red-500  hover:text-white hover:bg-red-600 rounded-sm transition ease-in lg:px-4 lg:py-3">
            {text}
        </NavLink>
    )
}

function SocialLinks() {
    return (
        <div className="absolute flex w-full bottom-10 justify-center gap-2 lg:hidden">
            <SocialIcon fgColor="#fff" url="https://www.linkedin.com/in/christian-martinez-b37868bb/" target="_blank" />
            <SocialIcon fgColor="#fff" url="https://github.com/chrismar303" target="_blank" />
            <SocialIcon fgColor="#fff" url="https://www.youtube.com/" target="_blank" />
        </div>
    )
}

export default AppNavbar;