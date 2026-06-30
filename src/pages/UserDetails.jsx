import { useParams, Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

export default function UserDetails() {
  const { id } = useParams();
  const { getUserById, loading } = useUsers();
  const user = getUserById(id);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Link to="/" className="inline-block mb-4 text-indigo-600 font-semibold">
          ← Back to Dashboard
        </Link>
        <p className="text-red-600 font-medium">User not found.</p>
      </div>
    );
  }

  const { name, email, phone, website, company, address } = user;
  const lat = address?.geo?.lat;
  const lng = address?.geo?.lng;
  const mapsUrl =
    lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link to="/" className="inline-block mb-4 text-indigo-600 font-semibold">
        ← Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4">{name.charAt(0).toUpperCase()}</div>
        <h1 className="text-xl font-semibold mb-2">{name}</h1>

        <section className="mt-4 border-t pt-4">
          <h2 className="text-md font-semibold text-gray-700">Contact</h2>
          <p className="mt-1"><strong>Email:</strong> {email}</p>
          <p className="mt-1"><strong>Phone:</strong> {phone}</p>
          <p className="mt-1"><strong>Website:</strong> {website}</p>
        </section>

        <section className="mt-4 border-t pt-4">
          <h2 className="text-md font-semibold text-gray-700">Company</h2>
          <p className="mt-1"><strong>Name:</strong> {company?.name}</p>
          {company?.catchPhrase && <p className="mt-1"><strong>Catchphrase:</strong> {company.catchPhrase}</p>}
          {company?.bs && <p className="mt-1"><strong>Business:</strong> {company.bs}</p>}
        </section>

        <section className="mt-4 border-t pt-4">
          <h2 className="text-md font-semibold text-gray-700">Address</h2>
          <p className="mt-1">{address?.street} {address?.suite ? `, ${address.suite}` : ""}</p>
          <p className="mt-1">{address?.city} {address?.zipcode}</p>
          {lat && lng && (
            <p className="mt-1">
              <strong>Geo-location:</strong> {lat}, {lng}
              {mapsUrl && (
                <> (<a href={mapsUrl} target="_blank" rel="noreferrer" className="text-indigo-600">View on map</a>)</>
              )}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
