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
    <div className="mb-6">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700" onClick={() => setOpen((o) => !o)}>
        {open ? "Close Form" : "+ Create New User"}
      </button>

      {open && (
        <form className="bg-white rounded-lg p-5 mt-3 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Full Name *"
                {...register("name", { required: "Name is required", validate: value => value.trim() !== '' || "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                type="email"
                placeholder="Email *"
                {...register("email", { required: "Email is required", validate: value => value.trim() !== '' || "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Phone"
              {...register("phone")}
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Company Name"
              {...register("company")}
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Street"
              {...register("street")}
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="City"
              {...register("city")}
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Zip Code"
              {...register("zipcode")}
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Website"
              {...register("website")}
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-indigo-700">
            Add User
          </button>
        </form>
      )}
      {submitted && <p className="text-green-600 font-semibold mt-2">User added successfully!</p>}
    </div>
  );
}
