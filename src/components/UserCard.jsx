export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
      <div className="user-card-avatar">{user.name.charAt(0).toUpperCase()}</div>
      <h3>{user.name}</h3>
      <p className="user-card-email">{user.email}</p>
      <p className="user-card-phone">{user.phone}</p>
      <p className="user-card-company">{user.company?.name}</p>
    </div>
  );
}
