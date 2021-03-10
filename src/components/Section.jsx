const Section = ({ title, subtitle, children }) => {
    return (
        <section className="container mx-auto min-h-screen pt-12 pb-24 lg:px-12">
            {/* header */}
            <Header title={title} subtitle={subtitle} />
            {children}
        </section>
    )
}

function Header({ title, subtitle }) {
    return (
        <div className="text-center mb-4 px-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <h3 className="mt-1 text-xs text-gray-600 mx-auto leading-relaxed lg:w-2/3">{subtitle}</h3>
        </div>
    )
} 

export default Section;