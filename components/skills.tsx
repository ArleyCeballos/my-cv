import { IconType } from "react-icons";
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface SkillsProps {
    Description: String;
    Icono: IconType;
}

const Skills = ({ Description, Icono }: SkillsProps) => {
    return (

        <div className="flex m-3 mb-2 " >
            <p className="mb-2 text-xl font-medium flex justify-between">
                <span className="text-[28px] ">
                    <Icono color="#FFD97F" />
                </span>
                <span>{Description}</span>
            </p>
        </div>

    );
};

export { Skills }