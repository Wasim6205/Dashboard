import { Link } from "react-router"
import { useAuth } from "../../hooks/useAuth"

const Register = () => {
  const {register,handleSubmit,handleRegister,errors} = useAuth()
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-900">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">Fill in the details below to get started.</p>

        <form onSubmit={handleSubmit(handleRegister)} className="mt-6 space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
            {...register("name",{
              required:"Name is required"
            })}
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
            {...register("email",{
              required:"Email is required"
            })}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
            {...register("password",{
              required:"Password is required"
            })}
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600/40"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/" className="font-medium text-indigo-600 hover:underline">
            log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register