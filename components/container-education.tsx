import { IconType } from "react-icons";

interface ContainerEducationProps {
    TitleLeft: String;
    TitleRight: String;
    DescriptionLeft: String;
    DescriptionRight: String;
}

const ContainerEducation = ({ TitleRight, TitleLeft, DescriptionLeft, DescriptionRight }: ContainerEducationProps) => {
    return (

        <div className="bg-white flex flex-col p-5">
            <div className="flex w-full justify-between text-xl ">
                <div className="  flex flex-col ">
                    <span className="titles" >{TitleLeft}</span>
                    <span className="text-gray-text">{DescriptionLeft}</span>
                </div>
                <div  className=" flex flex-col w-[800px]">
                    <span className="titles" >{TitleRight}</span>
                    <span className="text-gray-text ">{DescriptionRight}</span>
                </div>
            </div>          
        </div>

    );
};

export { ContainerEducation }