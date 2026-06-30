import { useParams, Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

export default function UserDetails() {
  const { id } = useParams();
  const { getUserById, loading } = useUsers();
  const user = getUserById(id);
  console.log('user:',user)

  if (loading) return <p className="text-center py-12 text-slate-500 font-medium">Loading...</p>;

  if (!user) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-left">
        <Link to="/" className="inline-block mb-6 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors">
          ← Back to Dashboard
        </Link>
        <p className="text-red-600 font-medium bg-red-50 p-4 rounded-lg border border-red-200">User not found.</p>
      </div>
    );
  }

  const { name, email, phone, website, company, address } = user;
  const lat = address?.geo?.lat;
  const lng = address?.geo?.lng;
  const mapsUrl = lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : null;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 text-left">
      <Link to="/" className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors">
        ← Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl p-8 border border-slate-200/60 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center text-2xl font-bold shadow-xs">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-snug">{name}</h1>
            <p className="text-sm text-slate-500 font-medium mt-0.5">{company?.name || "Independent"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section className="space-y-2">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Information</h2>
            <div className="space-y-1.5 text-sm text-slate-700 mt-2">
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Website:</strong> {website}</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address Details</h2>
            <div className="space-y-1.5 text-sm text-slate-700 mt-2">
              <p>{address?.street} {address?.suite ? `, ${address.suite}` : ""}</p>
              <p>{address?.city} {address?.zipcode}</p>
              {lat && lng && (
                <p className="mt-1">
                  <strong>Geo-location:</strong> {lat}, {lng}{" "}
                  {mapsUrl && (
                    <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                      (View on map)
                    </a>
                  )}
                </p>
              )}
            </div>
          </section>

          {(company?.catchPhrase || company?.bs) && (
            <section className="sm:col-span-2 space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Bio</h2>
              <div className="space-y-1.5 text-sm text-slate-700 mt-2">
                {company?.catchPhrase && <p><strong>Catchphrase:</strong> <span className="italic">"{company.catchPhrase}"</span></p>}
                {company?.bs && <p className="capitalize"><strong>Business:</strong> {company.bs}</p>}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

