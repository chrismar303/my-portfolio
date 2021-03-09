import Section from './Section';
import { aboutData}  from '../data';

const About = () => {    
    return (
        <main>
            <Section title="About me">
                {/* hero */}
                <div className="flex flex-col mt-4 lg:mt-8 lg:flex-row">
                    {/* img */}
                    <div className="flex-1 flex justify-center p-2 overflow-hidden lg:rounded-sm">
                        <img className="max-h-96" src={aboutData.image} alt={aboutData.imageAlt} />
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
            <div>
                <h3 className="text-lg font-semibold text-red-500">Who I Am</h3>
                <p className="mt-2 font-light">{aboutData.body}</p>
            </div>
            {/* Education */}
            <div>
                <h3 className="mt-4 text-lg font-semibold text-red-500">Education</h3>
                <Education />
            </div>
            {/* skills sections */}
            <div>
                <h3 className="mt-4 text-lg font-semibold text-red-500">Skills</h3>
                <Skills />
            </div>
        </div>
    )
}

function Skills() {
    return (
        <ul className="p-2 text-sm flex flex-wrap gap-2">
            {aboutData.skills?.map((skill, index) => (
                <li key={index} className="px-2 py-1 text-red-500 shadow"><Skill name={skill} /></li>
            ))}
        </ul>
    )
}

function Skill({ name }) {
    return (
        <div>{name}</div>
    )
}

function Education() {
    return (
        <ul>
            {aboutData.education?.map((item, index) => (
                <li key={index}><EducationItem title={item.title} subtitle={item.subtitle} type={item.type} /></li>
            ))}
        </ul>
    )
}

function EducationItem({ title, subtitle, type }) {
    return (
        <div className="bg-gray-50 shadow p-4 mt-2">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold">{title}</h4>
                <span className="text-xs text-gray-500">{type}</span>
            </div>
            <h6 className="font-light">{subtitle}</h6>
        </div>
    )

} 

export default About;
