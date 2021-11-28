import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';
import { Form, FieldGroup } from '../components/Inputs';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const Contact = () => {
    return (
        <main id="contact" className="px-5">
            <Section title="Contact me" subtitle="Thank you for reaching out. I will respond to you as soon as possible." className="text-gray-600">
                {/* form */}
                <div className="container mx-auto">
                    {/* fields container */}
                    <Form>
                        {/* fields */}
                        <div className="flex flex-col flex-wrap -m-2">
                            <FieldGroup>
                                <h3>
                                    <Label title="Email" />
                                    <Details text="Chrismar303.dev@gmail.com" icon={<FaEnvelope />} />
                                </h3>
                            </FieldGroup>
                            <FieldGroup>
                                <h3>
                                    <Label title="Phone" />
                                    <Details text="1 555 555-555" icon={<FaPhoneAlt />} />
                                </h3>
                            </FieldGroup>
                            <FieldGroup>
                                <h3>
                                    <Label title="Location" />
                                    <Details text="Los Angeles and Orange County Area" icon={<FaMapMarkerAlt />} />
                                </h3>
                            </FieldGroup>
                            <FieldGroup>                                    
                                <Label title="Social Media Links" />
                                <Details>
                                    <SocialLinks spacing={5} />
                                </Details>
                            </FieldGroup>
                            

                        </div>
                    </Form>
                </div>
            </Section>
        </main>
    )
}

function Label({ title }) {
    return (
        <div className="pb-2 text-red-500">
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    )
}

function Details({ text, icon, children }) {
    return (
        <div className="pb-3 font-light">  
            <div className="flex items-center text-red-700 italic">
                <span className="px-4">{icon}</span>                        
                {text}
            </div>  
            {children}
        </div>
    )

}

export default Contact;