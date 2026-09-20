import type { Technology } from "../types";

interface TechCardProps {
    tech: Technology;
}

const TechCard = ({ tech }: TechCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                />

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                    {tech.badge}
                </span>

            </div>

            <h3 className="mt-5 text-xl font-bold">
                {tech.name}
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                {tech.description}
            </p>

            <div className="mt-5 flex items-center justify-between text-sm">

                <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
                    {tech.category}
                </span>

                <span className="text-gray-500">
                    {tech.difficulty}
                </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

                <span className="text-sm font-medium text-gray-700">
                    ★ {tech.rating}
                </span>

                <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
                    Add to Stack
                </button>

            </div>

        </div>
    );
};

export default TechCard;