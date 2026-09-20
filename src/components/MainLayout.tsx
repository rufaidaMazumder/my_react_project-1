import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
    technologies: Technology[];
}

const MainLayout = ({ technologies }: MainLayoutProps) => {
    return (
        <main className="container mx-auto px-8 py-12">Stack
            <div className="flex flex-col lg:flex-row gap-8">
                
                <TechList technologies={technologies} />

                <Sidebar />

            </div>
        </main>
    );
};

export default MainLayout;