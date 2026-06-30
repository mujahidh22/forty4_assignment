import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link
      to={`/users/${user.id}`}
      className="block bg-white rounded-xl p-6 border border-slate-200/60 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all text-left group"
    >
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-11 h-11 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-lg">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
            {user.name}
          </h3>
          <p className="text-xs text-slate-400 font-medium">{user.company?.name || "Independent"}</p>
        </div>
      </div>
      <div className="space-y-1.5 text-sm text-slate-500">
        <p className="truncate"><span className="text-slate-400 font-medium">Email:</span> {user.email}</p>
        <p><span className="text-slate-400 font-medium">Phone:</span> {user.phone}</p>
      </div>
    </Link>
  );
}

