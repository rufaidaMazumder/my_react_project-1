import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
    technologies: Technology[];
}

const TechList = ({ technologies }: TechListProps) => {
    return (
        <section className="flex-1">

            <div className="mb-6">
                <h2 className="text-3xl font-bold">
                    Explore the Technologies
                </h2>

                <p className="mt-2 text-gray-500">
                    Pick the technologies you need to build your next project.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {technologies.map((tech) => (
                    <TechCard
                        key={tech.id}
                        tech={tech}
                    />
                ))}

            </div>

        </section>
    );
};

export default TechList;