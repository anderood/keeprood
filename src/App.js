import { FaSearch } from "react-icons/fa";

export default function Home() {
    return (
        <nav className="h-30 p-4 shadow">
            <div className="w-[900px] mx-auto flex">
                <h1 className="text-3xl font-bold">
                    KeepRood
                </h1>
                <form className="mx-auto ">
                    <div className="relative">
                        <div className="w-100">
                            <input
                                width={500}
                                type="search"
                                id="search"
                                className="p-2 pl-10 border rounded  shadow-sm outline-0 focus:shadow-lg"
                                placeholder="Search" required
                            />
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}