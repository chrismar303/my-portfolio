import Section from './Section';
const Contact = () => {
    return (
        <ContactForm />
    )
    
}

function ContactAlt() {
    return (
        <main className="bg-gray-50">
            <Section title="Contact me" subtitle="Please leave me a message">
                <div className=" flex w-full justify-center">
                    <form className="flex-1 flex flex-col items-center shadow rounded overflow-hidden bg-white max-w-xl mx-2">
                        <h3 className="text-xl p-4 font-semibold">Get In Touch</h3>
                        <div className="flex flex-col gap-4 py-4 w-full px-4">
                            <input className="shadow-sm placeholder-gray-500 rounded p-2 bg-gray-100" placeholder="NAME" />
                            <input className="shadow-sm placeholder-gray-500 rounded p-2 bg-gray-100" placeholder="EMAIL" />
                            <textarea className="shadow-sm placeholder-gray-500 rounded p-2 bg-gray-100" placeholder="MESSAGE" rows="5"></textarea>
                        </div>
                        <button className="w-full py-4 text-xl bg-red-500 text-red-200 font-semibold">SEND</button>
                    </form>
                </div>
            </Section>
        </main>
    )
}

function ContactForm() {
    return (
        <main id="contact" className="px-5">
            <Section title="Contact me" subtitle="Thank you for reaching out. I will respond to you as soon as possible." className="text-gray-600">
                {/* form */}
                <div className="container mx-auto">
                    {/* fields container */}
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        {/* fields */}
                        <div className="flex flex-col flex-wrap -m-2">
                            <div className="p-2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
        
    )
}

export default Contact;