import { NavLink } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { SocialIcon } from 'react-social-icons';

const AppNavbar = () => {
    return (
        <header>
            <Navbar color="primary" role="navigation" aria-label="main navigation">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a">
                        <NavLink to="/" exact>Chrismar</NavLink>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container position="end">
                        <Navbar.Item>
                            <NavLink to="/" exact>Home</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/about">About</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/projects">Projects</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/post">Post</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <SocialIcon url="https://www.linkedin.com/in/christian-martinez-b37868bb/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        </Navbar.Item>
                        <Navbar.Item>
                            <SocialIcon url="https://github.com/chrismar303" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        </Navbar.Item>
                        <Navbar.Item>
                            <SocialIcon url="https://www.youtube.com/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>

            </Navbar>
                            
        </header>
    )
}

export default AppNavbar;