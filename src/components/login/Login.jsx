import React from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="h-[100vh] w-[100vw] grid md:grid-cols-2 place-items-center bg-gradient-to-r from-cyan-500 to-pink-500">
      {/* leftside component  */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{delay : 0.5 , duration: 0.5 }}
      >
        <p className="text-6xl md:text-9xl text-white primary-heading">
          Smart City
        </p>
      </motion.div>
      {/* rightside component  */}
      <div
        className="bg-white w-80 border rounded-md grid place-items-center gap-6 py-6"
      >
        <div className="grid place-items-center">
          <AiOutlineUnlock className="text-4xl text-info" />
          <p className="mt-4 text-2xl">Login</p>
          <p className="mt-4 -mb-3 text-xs text-gray-400">
            Add your credentials
          </p>
        </div>
        <form className="flex flex-col space-y-2">
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="floating_outlined2"
              className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined2"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          <label className="cursor-pointer label">
            <span className="label-text text-gray-400">Remember me</span>
            <input type="checkbox" className="checkbox checkbox-info" />
          </label>
          <button
            type="submit"
            className="btn btn-info shadow-lg shadow-cyan-300 text-white w-full"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          Don't have an account?{" "}
          <span className="text-gray-700 font-semibold hover:underline cursor-pointer">
            sing up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
