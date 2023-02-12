import AppLink from './AppLink'

const AppLinks = ({ onClick }) => {
    return (
        <div className="flex flex-col gap-6  lg:flex-row lg:gap-8 text-red-500">
            <AppLink text="Home" to="home"  onClick={onClick}/>
            <AppLink text="Experience" to="experience" onClick={onClick}/>
            <AppLink text="About" to="about"  onClick={onClick} />
            <AppLink text="Projects" to="projects" onClick={onClick} />
            <AppLink text="Contact" to="contact" onClick={onClick} /> 
        </div>
    )
}

export default AppLinks;