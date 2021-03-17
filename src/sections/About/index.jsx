import Section from '../../components/Section';
import Content from './Content';
import ImageBanner from './ImageBanner';

const About = () => { 
    return (
        <main id="about">
            <Section title="About me">
                <div className="flex flex-col mt-4 lg:mt-8 lg:flex-row">
                    <ImageBanner />
                    <Content />
                </div>
            </Section>
        </main>
    )
}

export default About;
