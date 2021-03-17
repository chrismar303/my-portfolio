import Skills from './Skills';
import Education from './Education';
import { aboutData }  from '../../data';

const Content = () => {
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

export default Content;