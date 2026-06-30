import { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useUsers();
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  //debouncing for better performance.
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(debouncedSearch);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearch, setSearchTerm]);

  return (
    <div className="w-full">
      <input
        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        type="text"
        placeholder="Search users..."
        value={debouncedSearch}
        onChange={(e) => setDebouncedSearch(e.target.value)}
        aria-label="Search users by name"
      />
    </div>
  );
}


