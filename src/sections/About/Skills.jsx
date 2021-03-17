import { aboutData }  from '../../data';

const Skills = () => {
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

export default Skills;