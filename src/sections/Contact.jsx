import Section from '../components/Section';
import { Form, FieldGroup, Field } from '../components/Inputs';

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
                            <FieldGroup><Field name="name" type="text" /></FieldGroup>
                            <FieldGroup><Field name="email" type="email" /></FieldGroup>
                            <FieldGroup><Field name="message" type="textarea" /></FieldGroup>
                            <FieldGroup>
                                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                                    Send
                                </button>
                            </FieldGroup>
                        </div>
                    </Form>
                </div>
            </Section>
        </main>
    )
}


export default Contact;