import { useEffect, useState } from "react";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";

const fetchTechnologies = async () => {
    const res = await fetch("/data.json");

    if (!res.ok) {
        throw new Error("Failed to load technology data");
    }

    const data: Technology[] = await res.json();

    return data;
};

const App = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [stack, setStack] = useState<Technology[]>([]);

    useEffect(() => {
        fetchTechnologies()
            .then((data) => {
                setTechnologies(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
    <div>
        <Navbar />
        <Hero />

        {loading && (<p className="py-10 text-center">Loading technologies...</p>)}

        {error && (<p className="py-10 text-center text-red-500">{error}</p>)}

        {!loading && !error && (<MainLayout technologies={technologies} />)}
    </div>
);
};

export default App;