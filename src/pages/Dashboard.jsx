import CreateUserForm from "../components/CreateUserForm";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

export default function Dashboard() {
    const { filteredUsers, loading, error } = useUsers();

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="text-left">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">User Dashboard</h1>
                    <p className="text-slate-500 mt-1.5 font-medium">{filteredUsers.length} user(s) found</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                    <div className="w-full sm:w-72">
                        <SearchBar />
                    </div>
                    <CreateUserForm />
                </div>
            </header>

            {loading && <Loader />}
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 text-left font-medium">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredUsers.length === 0 ? (
                        <div className="col-span-full py-12 text-center bg-white rounded-xl border border-slate-200">
                            <p className="text-slate-500">No users match your search.</p>
                        </div>
                    ) : (
                        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                    )}
                </div>
            )}
        </div>
    );
}

