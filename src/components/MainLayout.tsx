import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
    technologies: Technology[];
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const MainLayout = ({
    technologies,
    stack,
    handleAddToStack,
    handleRemoveFromStack,
    handleRemoveAll,
}: MainLayoutProps) => {
    return (
        <main className="container mx-auto px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">

                <TechList
                    technologies={technologies}
                    stack={stack}
                    handleAddToStack={handleAddToStack}
                />

                <Sidebar
                    stack={stack}
                    handleRemoveFromStack={handleRemoveFromStack}
                    handleRemoveAll={handleRemoveAll}
                />

            </div>
        </main>
    );
};

export default MainLayout;