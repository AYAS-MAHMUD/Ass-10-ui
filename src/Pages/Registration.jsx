import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";



export default function Register({ onSubmit }) {
  const navigate = useNavigate();
  const { createUser, setUser, updatedUser,signInGoogle } = use(AuthContext);
  const [show,setShow] = useState(false)
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(name,email,password)
  const handlepass=(e)=>{
    e.preventDefault()
    setShow(!show)
  }
  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (photo && !/^https?:\/\/.+/.test(photo)) e.photo = "Enter a valid URL";
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6)
      e.password = "Password must be at least 6 characters";
    if (!accepted) e.accepted = "You must accept terms and conditions";
    return e;
  }


// Registration email and password
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name,email,password,photo)
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        updatedUser({ displayName: name, photoURL: photo })
          .then(() => {
            alert("Registration Successfully")
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    // for validation 
      const ev = validate();
    setErrors(ev);
    if (Object.keys(ev).length) return;

    setLoading(true);
    try {
      const payload = { name, photo, email, password };
      if (onSubmit) await onSubmit(payload);
      else await new Promise((r) => setTimeout(r, 800));
    } catch (err) {
      setErrors({ form: err.message || "Registration failed" });
    } finally {
      setLoading(false);
    }
  }
//   login with google
  const handleGoogleLogin=(e)=>{
    e.preventDefault();
    signInGoogle()
    .then((result)=>{
        console.log(result)
      alert("Registration Successfully")
      setUser(result.user)
      navigate("/")
    //   const newUser = {
    //     name : result.user.displayName,
    //     email : result.user.email,
    //     image : result.user.photoURL
    //   }
      // create user in database
    //   fetch('http://localhost:3000/users',{
    //     method : 'POST',
    //     headers:{
    //       'content-type' : 'application/json'
    //     },
    //     body : JSON.stringify(newUser)
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log('data after user save',data)
    //   })
    })
    .catch(error=>{
      console.log(error.user)
      alert("Registration failed")
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Register your account
        </h2>
        <hr className="my-6 border-gray-200" />

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              value={photo}
              name="photo"
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter a photo URL"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.photo ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.photo && (
              <p className="mt-1 text-xs text-red-600">{errors.photo}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input 
              type={show? "text":"password"}
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`mt-2 w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 bg-gray-100 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            <button className="relative left-85 -top-9" onClick={handlepass}>{show?<FaEyeSlash className="text-xl " />:<FaEye className="text-xl " />}</button>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>


          <div className="mb-4 flex items-start">
            <input
              id="terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Accept <span className="font-medium">Term & Conditions</span>
            </label>
          </div>
          {errors.accepted && (
            <p className="mt-1 text-xs text-red-600 mb-2">{errors.accepted}</p>
          )}

          {errors.form && (
            <p className="text-sm text-red-600 mb-3">{errors.form}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-center font-semibold text-md py-2">or</p>
          <div className="flex items-center justify-center">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-5 py-2  shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Register with Google</span>
          </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-5">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-red-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}