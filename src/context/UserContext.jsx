import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { fetchUsers } from "../services/userData_service";

export const UserContext = createContext(null);

let localIdCounter = 1000; // keep generated IDs clear of the API's real IDs (1-10)

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        if (isMounted) {
          setUsers(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError("Failed to load users. Please try again later.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadUsers();
    return () => {
      isMounted = false;
    };
  }, []);

  const addUser = useCallback((newUser) => {
    localIdCounter += 1;
    setUsers((prev) => [
      ...prev,
      {
        id: localIdCounter,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone || "N/A",
        company: { name: newUser.company || "N/A" },
        address: {
          street: newUser.street || "N/A",
          city: newUser.city || "N/A",
          zipcode: newUser.zipcode || "N/A",
          geo: { lat: "0", lng: "0" },
        },
        website: newUser.website || "N/A",
      },
    ]);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const value = {
    users,
    filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    addUser,
    getUserById: (id) => users.find((u) => String(u.id) === String(id)),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
