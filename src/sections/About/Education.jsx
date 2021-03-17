import { aboutData }  from '../../data';

const Education = () => {
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

export default Education;