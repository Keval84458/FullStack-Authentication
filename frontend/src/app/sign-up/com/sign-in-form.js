"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleSignUp = async () => {
    try {
      const payload = { ...formData };
      console.log(payload);
      const reponse = await axios.post(
        "http://localhost:2025/register",
        payload
      );
      if (reponse.status === 201 && reponse !== undefined) {
        router.push("/login");
      } else {
        alert("register failed.....");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInform;
