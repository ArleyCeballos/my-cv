interface ProgressBarProps {
    Title: String;
    Percentage: String
}

const ProgressBar = ({ Title, Percentage }: ProgressBarProps) => {
    return (
        <div className="mb-2  text-zinc-500" >
            <div className="flex flex-row justify-between">
                <p className="mb-2 text-xl font-medium">{Title}</p>
                <p className="mb-2 text-xl font-medium">{Percentage}</p>
            </div>

            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 rounded-full bg-teal-500"
                    style={{ width: `${Percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export { ProgressBar }