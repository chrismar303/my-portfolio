const PostItem = ({ title, imgUrl, alt, published }) => {
    return (
        <span className="relative block rounded leading-snug flex flex-col items-center justify-center max-w-md  mx-auto border border-red-400 rounded-lg">
            <img className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg object-cover shadow-md" src={imgUrl} alt={alt} />

            <div className="absolute -bottom-10 w-56 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>
                
                <div className="flex items-center justify-between px-3 py-2 bg-red-400 dark:bg-gray-700">
                    <button className="w-full text-md px-2 py-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform rounded">
                        {new Date(published)?.toLocaleDateString()}
                    </button>
                </div>
            </div>
        </span>
    )
}

export default PostItem;