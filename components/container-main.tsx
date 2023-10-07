import { IconType } from "react-icons";
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface ContainerProps {
    Title: String;
    Description: String;
    Icono: IconType;
}

const ContainerMain = ({ Title, Description, Icono }: ContainerProps) => {
    return (
        <div className="  h-[200px] w-[310px] flex flex-col items-center bg-white p-6 items m-3">
            <span className="text-[68px] ">
                <Icono color="#FFD97F" />
            </span>
            <span className=" p-3 font-semibold text-[#2B2B2B]" >{Title}</span>
            <span className="text-gray-tex text-center">{Description}</span>
        </div>

    );
};

export { ContainerMain }