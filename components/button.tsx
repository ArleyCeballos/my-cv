import { Dispatch, SetStateAction } from "react"

interface ButtonProps {
    text: String
    type: 'primary' | 'secondary'
    handleClick?: () => void
}

const Button = ({ text, type, handleClick = () => { } }: ButtonProps) => {
    return (
        <button
            onClick={handleClick}
            className={`bg-hv-yellow ${type === 'primary' ? 'px-8 py-2 font-bold' : 'px-3 py-2 font-semibold'} flex m-3 mb-2 items-center text-3xl font-semibold bg-[#FFB400] w-[220px] p-5 hover:scale-110`}>
            <span className="text-md text-black">{text}</span>
        </button>
    )
}

export { Button }



