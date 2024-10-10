import React, { useState } from "react";

function Login() {
  const [account, setAccount] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ">
        <p className="text-2xl font-semibold ">
          {account === "Sign Up" ? "Creat Account" : "Login"}
        </p>
        <p>
          Please {account === "Sign Up" ? "sign up " : "log in"} to book
          appointment
        </p>

        {account === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              onClick={(e) => setFormData(e.target)}
              type="text"
              name="username"
              value={formData.username}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            onClick={(e) => setFormData(e.target)}
            type="text"
            name="email"
            value={formData.email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            onClick={(e) => setFormData(e.target)}
            type="text"
            name="password"
            value={formData.password}
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base  ">
          {account === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {account === "Sign Up" ? (
          <p>
            Already have an Account?{" "}
            <span
              onClick={() => setAccount("/Login")}
              className="text-primary underline cursor-pointer"
            >
              {" "}
              Login here{" "}
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setAccount("/Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              {" "}
              Click here{" "}
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
