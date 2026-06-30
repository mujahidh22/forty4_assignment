import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

export default function Dashboard() {
    const { filteredUsers, loading, error, searchTerm } = useUsers();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <header className="mb-4">
                <h1 className="text-2xl font-bold">User Dashboard</h1>
                <p className="text-gray-500 mt-1">{filteredUsers.length} user(s) found</p>
            </header>

            <SearchBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {filteredUsers.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">No users match your search.</p>
                ) : (
                    filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                )}
            </div>
        </div>
    );
}
