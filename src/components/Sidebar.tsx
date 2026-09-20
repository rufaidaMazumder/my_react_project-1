const Sidebar = () => {
    return (
        <aside className="w-full lg:w-80">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>

                    <span className="text-sm text-gray-500">
                        0 Selected
                    </span>
                </div>

                <div className="mt-8 flex min-h-40 items-center justify-center text-center">

                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>

                </div>

            </div>

        </aside>
    );
};

export default Sidebar;