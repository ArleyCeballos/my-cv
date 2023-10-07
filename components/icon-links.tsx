import { IconType } from "react-icons";
import Link from 'next/link';

interface ContainerProps {
    Icono: IconType;
    href: string;
}

const IconLink = ({ Icono, href }: ContainerProps) => {
    return (
        <div className="flex flex-col items-center m-3">
            <a className="text-[68px] rounded-full hover:scale-110" href={href}>
                <Icono color="#FFB400" />
            </a>
        </div>
    );
};

export { IconLink }
