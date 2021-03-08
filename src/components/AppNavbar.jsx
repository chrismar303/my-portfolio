import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';

const AppNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white text-black w-full shadow">
            <nav className="items-center lg:flex lg:items-center lg:justify-between lg:w-10/12 lg:mx-auto lg:py-3">
                {/* logo */}
                <div className="flex p-3 text-red-500 relative">
                    <h2 className="mx-auto text-xl font-bold">CTech</h2>
                    <span
                        onClick={() => setOpen(!open)}
                        className="absolute right-3 border-2 border-red-500 p-1 cursor-pointer lg:hidden"
                    >
                            CM
                    </span>
                </div>
                {/* main */}
                <div className={`${open ? '' : 'hidden'} flex flex-col font-light justify-center items-center lg:block`}>
                    <Link text="Home" href="/" exact />
                    <Link text="About" href="/about"  />
                    <Link text="Projects" href="/projects"  />
                    <Link text="Post" href="/post"  /> 
                    <Link text="Contact" href="/contact" /> 
                </div>

            </nav>
        </header>
    )
   
}

function Link({ text, href, exact }) {
    return (
         <NavLink to={href} exact={exact || false} className="w-full py-2 px-6 text-lg text-center text-red-500  hover:text-white hover:bg-red-600 rounded-sm transition ease-in">
            {text}
        </NavLink>
    )
}


// const AppNavbar = () => {
//     return (
//         <header>
//             <Navbar role="navigation" aria-label="main navigation">
//                 <Navbar.Brand>
//                     <Navbar.Item renderAs="a">
//                         <NavLink to="/" exact>Chrismar</NavLink>
//                     </Navbar.Item>
//                     <Navbar.Burger />
//                 </Navbar.Brand>
//                 <Navbar.Menu>
//                     <Navbar.Container position="end">
//                         <Navbar.Item>
//                             <NavLink to="/" exact>Home</NavLink>
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <NavLink to="/about">About</NavLink>
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <NavLink to="/projects">Projects</NavLink>
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <NavLink to="/post">Post</NavLink>
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <SocialIcon url="https://www.linkedin.com/in/christian-martinez-b37868bb/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <SocialIcon url="https://github.com/chrismar303" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         </Navbar.Item>
//                         <Navbar.Item>
//                             <SocialIcon url="https://www.youtube.com/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         </Navbar.Item>
//                     </Navbar.Container>
//                 </Navbar.Menu>

//             </Navbar>
                            
//         </header>
//     )
// }

export default AppNavbar;