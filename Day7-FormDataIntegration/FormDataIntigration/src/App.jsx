import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const App = () => {

  let {handleSubmit, register, reset} = useForm();

  const formData = new FormData();
  const submitHandler = async (data)=> {
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("profile_pic", data.profile_pic[0])
    // console.log(data);

    await axios.post("http://localhost:3000/user/create", formData)
    
    
  }

  console.log(formData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-10 text-slate-100 sm:py-16">
      <section className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
        {/* Header */}
        <div className="border-b border-slate-800 px-6 py-7 sm:px-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl ring-1 ring-cyan-400/20">
            👤
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Create Profile
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tell us about yourself
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Add your personal details and a profile picture to complete your
            profile.
          </p>
        </div>

        {/* Form */}
        <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-6 px-6 py-7 sm:px-8 sm:py-8">
          {/* Name */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-300"
              htmlFor="name"
            >
              Full Name
            </label>

            <input
            {...register("name")}
              id="name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
              placeholder="Enter your full name"
              type="text"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-300"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
            {...register("email")}
              id="email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
              placeholder="you@example.com"
              type="email"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-300"
              htmlFor="profilePic"
            >
              Profile Picture
            </label>

            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-4 transition hover:border-cyan-400/50">
              <input
              {...register("profile_pic")}
                id="profilePic"
                className="block w-full cursor-pointer text-sm text-slate-400 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-cyan-400 file:px-5 file:py-2.5 file:font-semibold file:text-slate-950 file:transition hover:file:bg-cyan-300"
                type="file"
              />

              <p className="mt-2 text-xs text-slate-600">
                Choose a clear profile image
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="group w-full rounded-xl bg-cyan-400 px-4 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 active:translate-y-0"
            type="submit"
          >
            <span className="flex items-center justify-center gap-2">
              Create Profile
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;
