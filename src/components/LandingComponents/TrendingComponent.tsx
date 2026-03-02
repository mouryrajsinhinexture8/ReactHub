import { useEffect, useState } from "react";
import TrendingComponentCard from "./TrendingComponentCard";

type ComponentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  likes: number;
  comments: number;
};


/*
    as of now there was nothing stored in localstorage i added this in localstorage via console: 

    localStorage.setItem(
        "components",
        JSON.stringify([
            {
            id: "1",
            title: "Animated Button",
            description: "Smooth hover animation",
            category: "Buttons",
            likes: 245,
            comments: 32,
            },
            {
            id: "2",
            title: "Modal Dialog",
            description: "Accessible modal component",
            category: "Overlays",
            likes: 156,
            comments: 19,
            }
        ])
    );
*/

function TrendingComponent() 
{
    const [trending, setTrending] = useState<ComponentItem[]>([]);
    /*
        here trending state will be an array of type ComponentItem
    */

    useEffect(() => {
        const stored = localStorage.getItem("components");

        if (!stored) 
            return;

        const components: ComponentItem[] = JSON.parse(stored);

        // grouping components by category
        const grouped: Record<string, ComponentItem[]> = {};

        components.forEach((comp) => 
        {
            if (!grouped[comp.category]) 
                grouped[comp.category] = [];

            grouped[comp.category].push(comp);
        });

        // fetching most liked component from each category
        const topFromEach = Object.values(grouped).map( (categoryList) =>
            categoryList.sort( (a, b) => b.likes - a.likes)[0] );

        setTrending(topFromEach);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
            <div>
            <h2 className="text-2xl font-bold">
                Trending Components
            </h2>
            <p className="text-gray-100 dark:text-gray-400 mt-2">
                Most liked components!
            </p>
            </div>

            <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            View All →
            </button>
        </div>


        {/* Grid */}
        {trending.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No trending components yet.</p>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trending.map((comp) => (
                <TrendingComponentCard
                key={comp.id}
                {...comp}
                />
            ))}
            </div>
        )}
        </section>
    );
}

export default TrendingComponent;