import { useUsers } from "../hooks/useUsers";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useUsers();

  return (
    <div className="mb-4">
      <input
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search users by name"
      />
    </div>
  );
}
