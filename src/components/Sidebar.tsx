import type { Technology } from "../types";

interface SidebarProps {
    stack: Technology[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
    return (
        <aside className="w-full lg:w-80">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold">
                    Your Stack
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    {stack.length} Technology Selected
                </p>

                {stack.length === 0 && (
                    <div className="mt-8 flex min-h-40 items-center justify-center text-center">
                        <p className="text-sm text-gray-400">
                            Your stack is empty.
                        </p>
                    </div>
                )}

                {stack.length > 0 && (
                    <div className="mt-6 flex flex-col gap-3">

                        {stack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="h-8 w-8 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>

                                <button onClick={() => handleRemoveFromStack(item.id)}>
                                    ✕
                                </button>
                            </div>
                        ))}

                    </div>
                )}

                {stack.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="mt-6 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500"
                    >
                        Remove All
                    </button>
                )}

            </div>

        </aside>
    );
};

export default Sidebar;