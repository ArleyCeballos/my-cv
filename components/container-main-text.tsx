import { IconType } from "react-icons";

interface ContainerTextProps {
    Title: String;
    Description: String;
}

const ContainerMainText = ({ Title, Description,  }: ContainerTextProps) => {
    return (
        <div className=" flex flex-col justify-center items-center h-40 ">
            <span className="text-3xl font-bold text-[#2B2B2B] " >{Title}</span>
            <span className="p-3  text-gray-text text-center">{Description}</span>
        </div>

    );
};

export { ContainerMainText }