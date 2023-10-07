import Link from 'next/link';

interface SkillsProps {
    Title: string;
    href: string;
}

const Button = ({ Title, href }: SkillsProps) => {
    return (
             <div className="flex m-3 mb-2 items-center text-3xl font-semibold bg-[#FFB400] w-[220px] p-5 hover:scale-110">
                <a className="btn" href={href}>{Title}</a>
            </div>
     );
};

export { Button }
