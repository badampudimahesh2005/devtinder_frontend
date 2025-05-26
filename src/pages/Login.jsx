import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useLogin from "../hooks/useLogin";
import { useNavigate,Link  } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Mahesh@123");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

 const login = useLogin();

  const handleLogin = async (e)=>{
    e.preventDefault();
   login(email, password, setError);

  }

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-400">
<div className="w-full max-w-md bg-base-200 p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
  <p className="text-sm text-center text-gray-500 mb-4">Connect with developers around the world!</p>

  <form onSubmit={handleLogin} className="space-y-4">
    <div>
      <label htmlFor="email" className="block">Email</label>
      <input 
      id="email"
      type="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)} 
      placeholder="Enter your email"
      className="w-full p-2 mt-1 border border-gray-500 rounded-md focus:outline-none outline-none "
    
      />
    </div>
    <div className="mb-4 relative">
      <label htmlFor="password" className="block">Password</label>
      <input 
      id="password"
      type={passwordVisible ? "text" : "password"}
      value={password}
      onChange={(e)=> setPassword(e.target.value)} 
      placeholder="Enter your password"
      className="w-full p-2 mt-1 border border-gray-500 rounded-md focus:outline-none outline-none "
     
      />
      <button 
      type="button"
      onClick={() => setPasswordVisible(!passwordVisible)}
      className="absolute inset-y-0 top-7 cursor-pointer right-3 flex items-center text-gray-500"
      >
        {passwordVisible ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
      </button>
    </div>
    {error &&<p className="text-red-400 text-sm mt-3">{error}</p> }

      <button 
      type="submit"
      className="w-full bg-primary  text-white py-2 rounded-md cursor-pointer hover:bg-[#4c4acc] transition duration-200"
      >
        Login
      </button>

  </form>
  <p className="text-center text-sm text-gray-600 mt-4">Don't have an account?{"  "} 
    <Link to="/signup" className="text-blue-500 hover:underline">
     Sign Up
    </Link>
  </p>
</div>
    </div>
  )
}

export default Login;