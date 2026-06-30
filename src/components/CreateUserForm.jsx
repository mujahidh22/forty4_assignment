import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/useUsers";

export default function CreateUserForm() {
  const { addUser } = useUsers();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      street: "",
      city: "",
      zipcode: "",
      website: "",
    }
  });

  const onSubmit = (data) => {
    if (!data.name.trim() || !data.email.trim()) return;

    addUser(data);
    reset();
    setSubmitted(true);
    setOpen(false);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="relative">
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto" 
        onClick={() => setOpen(true)}
      >
        + Create New User
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl overflow-hidden text-left border border-slate-100">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Add New User</h2>
              <button 
                onClick={() => setOpen(false)} 
                className="text-slate-400 hover:text-slate-600 text-xl font-bold leading-none p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                &times;
              </button>
            </div>
            
            <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name *</label>
                  <input
                    className={`w-full px-3.5 py-2 border rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required", validate: value => value.trim() !== '' || "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Email *</label>
                  <input
                    className={`w-full px-3.5 py-2 border rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", { required: "Email is required", validate: value => value.trim() !== '' || "Email is required" })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Phone</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="1-770-736-8031"
                    {...register("phone")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Company Name</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Acme Inc."
                    {...register("company")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Street</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Kulas Light"
                    {...register("street")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">City</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Gwenborough"
                    {...register("city")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Zip Code</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="92998-3874"
                    {...register("zipcode")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Website</label>
                  <input
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="hildegard.org"
                    {...register("website")}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2.5 mt-6 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setOpen(false)} 
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-xs"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {submitted && (
        <p className="text-green-600 font-semibold mt-2 text-sm text-left">User added successfully!</p>
      )}
    </div>
  );
}

