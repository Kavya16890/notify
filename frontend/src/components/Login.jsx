import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    try {
      const res = await fetch("https://notify-qc3m.onrender.com/login", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      navigate("/");
    } catch (err) {
      console.error("error: ", err.message);
    }
  };
  return (
    <div className="p-10">
      <input
        type="email"
        className="border border-zinc-400"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border border-zinc-400 ml-2"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="py-1 px-2 bg-blue-400 rounded ml-2"
        onClick={loginUser}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
