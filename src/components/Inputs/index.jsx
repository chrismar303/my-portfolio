export const Form = ({ children }) => {
    return (
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {children}
        </div>
    )
}

export const FieldGroup = ({ children }) => {
    return (
        <div className="p-2">
            {children}
        </div>
    )
}

export const Field = ({ name, type }) => {

    const input = type === 'textarea' 
        ? <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        : <input type={type} id={name} name={name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

    return (
        <div className="relative">
            <label for={name} className="leading-7 text-sm capitalize text-gray-600">{name}</label>
            {input}
        </div>
    )
}