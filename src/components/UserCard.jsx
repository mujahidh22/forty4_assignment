import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link
      to={`/users/${user.id}`}
      className="block bg-white rounded-lg p-5 shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-2">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
      <p className="text-sm text-gray-500">{user.company?.name}</p>
    </Link>
  );
}
