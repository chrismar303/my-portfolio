import { FaTags } from 'react-icons/fa';

const Footer = ({ tags }) => {
    return (
        <div className="border-t border-gray-200 px-3 py-1 mt-2 bg-gray-50">
            <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
                <h4>Technologies</h4>
                <span>{<FaTags />}</span>
            </div>
            <Tags tags={tags} />
        </div>
    )
}

function Tags({ tags }) {
    return (
        <div className="flex text-xs gap-x-4 gap-y-2 py-1 overflow-x-auto">
            {tags.map(tag => (
                <span className="bg-red-100 text-red-600 px-4 py-0.5 font-semibold rounded-xl">{tag}</span>
            ))}
        </div>
    )
}

export default Footer;