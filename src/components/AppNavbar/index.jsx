import { useState } from 'react';
import AppLinks from './AppLinks';
import SocialLinks from '../SocialLinks';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md'

const AppNavbar = () => {
    // only applies to mobile
    const [open, setOpen] = useState(false);
    const openMenu = _ => setOpen(true);
    const closeMenu = _ => setOpen(false);

    return (
        <header className="fixed z-50 bg-white text-black w-full shadow">
            <nav className="items-center lg:flex lg:items-center lg:justify-between lg:w-10/12 lg:mx-auto lg:py-3">
                {/* logo */}
                <div className="flex p-3 text-red-500 relative">
                    <h2 className="mx-auto text-xl font-bold">Chrismar</h2>
                    <span
                        className="absolute top-0 left-0 h-full w-full text-xl flex justify-end pr-3 items-center text-gray-500 lg:hidden"
                    >
                        <BiMenu className="cursor-pointer" onClick={openMenu} />
                    </span>
                </div>
                {/* main */}
                <div className={`${open ? 'left-0' : '-left-full'} duration-500 ease-in-out fixed bg-white  top-0 w-full h-full z-50 flex flex-col text-4xl  justify-around items-center lg:relative lg:block lg:left-0 lg:text-sm lg:w-max `}>
                    {/* close menu */}
                    <div 
                        onClick={closeMenu}
                        className="absolute top-3 right-3 text-4xl text-red-700 cursor-pointer lg:hidden"
                    >
                        <MdClose />
                    </div>
                    {/* menu content */}
                    <h5 className="text-lg font-bold text-red-900 lg:hidden">Chrismar</h5>
                    <AppLinks onClick={closeMenu} />
                    {/* menu social media links */}
                    <div className="text-lg lg:hidden"><SocialLinks spacing={2} /></div>
                </div>
            </nav>
        </header>
    )
   
}


export default AppNavbar;