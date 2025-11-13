import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

export default function Login({ onSubmit }) {
  // console.log(location)
  const Navigate = useNavigate();
  const {signInUser,passwordReset,signInGoogle,setUser} = use(AuthContext);

  const [show,setShow] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handlepass=(e)=>{
    e.preventDefault()
    setShow(!show)
  }
  const forgotPass=(e)=>{
    e.preventDefault()
    passwordReset(email)
    .then(()=>{
      toast.success("Please cheak your email")
    })
    .catch(error=>{
      console.log(error)
    })
    // console.log(email)
  }

  function validate() {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    // console.log(email,password)
    signInUser(email,password)
    .then(() => {
        // console.log(result.user);
        toast.success("Login Successfully")
        ev.target.reset();
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("user not found")
      });


const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      // call optional onSubmit prop, otherwise just simulate
      if (onSubmit) await onSubmit({ email, password });
      else await new Promise((r) => setTimeout(r, 700));
      // success handling can be done in parent
    } catch (err) {
      setErrors({ form: err.message || "Failed to login" });
    } finally {
      setLoading(false);
    }
  }
  const hangleGoogleLogin=(e)=>{
    e.preventDefault();
    signInGoogle()
    .then((result)=>{
      toast.success("Registration Successfully")
      setUser(result.user)
        Navigate("/")
      
    })
    .catch(error=>{
      console.log(error.user)
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="w-full max-w-md  rounded-2xl shadow-2xl p-8">
        <h2 className="text-center text-2xl font-semibold">Login your account</h2>
        <hr className="my-6 border-gray-200" />

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div className="-mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <input
              id="password"
              required
              name="password"
              type={show? "text":"password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button className="relative left-85 -top-9" onClick={handlepass}>{show?<FaEyeSlash className="text-xl " />:<FaEye className="text-xl " />}</button>
            {errors.password && (
              <p id="password-error" className="mt-1 text-xs text-red-600">
                {errors.password}
              </p>
            )}
          </div>
            <p onClick={forgotPass} className="hover:underline mb-5 cursor-pointer">forgot password?</p>
          {errors.form && <p className="text-sm text-red-600 mb-3">{errors.form}</p>}

          <button
           
            type="submit"
            className="w-full py-3 rounded-md bg-gray-800 text-white font-medium shadow-sm hover:opacity-95 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
                    <p className="text-center font-semibold text-md py-2">or</p>
          <div className="flex items-center justify-center">
            <button  onClick={hangleGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-5 py-2  shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300">

            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Login with Google</span>
          </button>
          </div>

        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't Have An Account ? <Link to="/register" className="text-red-500 font-medium">Register</Link>
        </p>
      </div>
    </div>
  );
}