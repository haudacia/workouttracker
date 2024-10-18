export const CustomButton = ({ text, children }) => {
    return (
        <button className='rounded-xl px-4 text-sm bg-blue-200 gap-24' >
            {text}{children}
        </button>
    )
}

export default CustomButton