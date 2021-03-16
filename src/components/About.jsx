import Section from './Section';
import { aboutData }  from '../data';

const About = () => { 
    return (
        <main>
            <Section title="About me">
                {/* hero */}
                <div className="flex flex-col mt-4 lg:mt-8 lg:flex-row">
                    {/* img */}
                    <div className="flex-1 flex justify-center overflow-hidden lg:rounded-sm">
                        <img className="max-h-96 object-cover" src={aboutData.image} alt={aboutData.imageAlt} />
                    </div>
                    {/* content */}
                    <Content />
                </div>
            </Section>
        </main>
    )
}


function Content() {
    return (
        <div className="flex-1 p-2 lg:h-1/2 lg:m-auto lg:pl-8 ">
            {/* about */}
            <ContentSection title="Who I Am">
                <p className="mt-2 font-light">{aboutData.body}</p>
            </ContentSection>
            {/* Education */}
            <ContentSection title="Education">
                <Education />
            </ContentSection>
            {/* skills sections */}
            <ContentSection title="Skills">
                <Skills />
            </ContentSection>
        </div>
    )
}


function ContentSection({ title, children }) {
    return (
        <div>
            <h3 className="mt-4 text-lg font-semibold text-red-500 lg:mt-2">{title}</h3>
            {children}
        </div>
    )
}

function Skills() {
    return (
        <ul className="w-full p-2 text-sm flex flex-wrap justify-center md:gap-x-3 gap-y-4">
            {Object.keys(aboutData.skills).map((skill, index) => (
                <li key={index} className="px-2 py-1 text-gray-800 ">
                    <Skill name={skill} />
                </li>
            ))}
        </ul>
    )
}

function Skill({ name }) {
    const { icon, color } = aboutData.skills[name]
    return (
        <div className="flex flex-col justify-center items-center gap-1 w-16">
            <span className={`text-5xl ${color}`}>{icon}</span>
            <span className="font-medium text-black">
                {name}
            </span>
        </div>
    )
}

function Education() {
    return (
        <ul>
            {aboutData.education?.map((item, index) => (
                <li key={index}><EducationItem title={item.title} subtitle={item.subtitle} type={item.type} icon={item.icon} /></li>
            ))}
        </ul>
    )
}

function EducationItem({ title, subtitle, type, icon }) {
    return (
        <div className="flex bg-gray-50 shadow p-4 mt-2">
            {/* left: main info */}
            <div className="flex flex-1 flex-col justify-between">
                <h4 className="font-semibold">{title}</h4>
                <h6 className="font-light">{subtitle}</h6>
            </div>
            {/* right: extra data */}
            <div className="flex items-center flex-col justify-center w-16">
                <span className="text-lg text-red-500">{icon}</span>
                <span className="text-xs text-gray-500">{type}</span>
            </div>
        </div>
    )

} 

export default About;
