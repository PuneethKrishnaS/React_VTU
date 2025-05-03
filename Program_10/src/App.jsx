import { useEffect, useState } from "react";

export default function App() {
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState("");

    const response = () => {
        return fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((res) => setUsers(res));
    };
    useEffect(() => {
        response();
    }, []);

    const onSearch = (e) => {
        setSearch(e.target.value);
    };

    const refresh = () => {
        setUsers(null)
        response();
    };

    return (
        <div className="h-dvh w-dvw flex flex-col bg-neutral-200 text-black overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {users ? (
                    users.users
                        .filter(
                            (user) =>
                                user.firstName
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) &&
                                user.role.toLowerCase().includes("")
                        )

                        .map((user) => (
                            <div
                                key={user.id}
                                className="bg-white p-4 rounded-xl shadow flex flex-col items-center text-center h-fit"
                            >
                                <img
                                    src={user.image}
                                    alt={`${user.firstName}`}
                                    className="w-24 h-24 rounded-full object-cover mb-3"
                                />
                                <h2 className="text-lg font-semibold">
                                    {user.firstName}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {user.email}
                                </p>
                                <p className="text-sm">
                                    {user.gender}, {user.age} years
                                </p>
                                <p className="text-sm text-gray-500">
                                    {user.role}
                                </p>
                            </div>
                        ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="w-full p-5 border-t border-neutral-300 flex justify-center items-center gap-5">
                <input
                    type="text"
                    className="bg-white w-full max-w-2xl block rounded-full py-2 px-5 focus:outline-none border border-neutral-300"
                    onChange={onSearch}
                    value={search}
                    placeholder="Search"
                />
                <button onClick={refresh} className="px-3 py-2 bg-green-600 rounded-full text-white cursor-pointer">Refresh</button>
            </div>
        </div>
    );
}
