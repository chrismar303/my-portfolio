import { NavLink } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';

const AppNavbar = () => {
    return (
        <header className="text-red-600 body-font ">
            <nav className="border-b  container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <NavLink to="/" exact className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                    </svg>
                    <span className="ml-3 text-xl">CM</span>
                </NavLink>
                <div className="font-medium text-lg flex flex-wrap items-center text-base justify-center">
                    <Link text="Home" href="/" exact />
                    <Link text="About" href="/about" />
                    <Link text="Projects" href="/projects" />
                    <Link text="Post" href="/post" />
                    <NavLink to="/contact" className="text-red-600">
                        <button className="font-medium inline-flex items-center bg-red-100 border-0 py-2 px-4 focus:outline-none hover:text-red-900 hover:bg-red-200 rounded text-base mt-4 md:mt-0">
                                Contact me
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

function Link({ text, href, exact }) {
    return (
        <NavLink to={href} exact={exact || false} className="mr-10 px-2 py-2 text-red-500 hover:text-red-800 hover:bg-red-300 transition ease-in rounded-md">
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