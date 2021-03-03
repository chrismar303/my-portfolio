import { NavLink } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';

const AppNavbar = () => {
    return (
        <header className="text-red-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to="/" exact className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                    </svg>
                    <span className="ml-3 text-xl">CM</span>
                </NavLink>
                <nav className="font-medium text-lg md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" exact className="mr-10 text-red-500 hover:text-red-800">Home</NavLink>
                    <NavLink to="/about" className="mr-10 text-red-500 hover:text-red-800">About</NavLink>
                    <NavLink to="/projects" className="mr-10 text-red-500 hover:text-red-800">Projects</NavLink>
                    <NavLink to="/post" className="mr-10 text-red-500 hover:text-red-800">Post</NavLink>
                </nav>
                <button className="font-medium inline-flex items-center bg-red-100 border-0 py-2 px-4 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">
                    Contact me
                </button>
            </div>
        </header>
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