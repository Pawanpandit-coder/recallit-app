import React from "react";
import { useState } from "react";
import axios from "axios";
import { isTokenExpired } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function AddNewRecall() {
  const data = localStorage.getItem("data");
  const token = JSON.parse(data).token;

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    title: "",
    desc: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date()
      .toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
      })
      .slice(0, 5),
    file: "",
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm({
      ...form,
      [name]: type == "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/recall`,
        {
          title: form.title,
          desc: form.desc,
          date: form.date,
          time: form.time,
          file: form.file,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setForm({
        title: "",
        desc: "",
        date: "",
        time: "",
        file: "",
      });
      console.log("Data fetched");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" flex justify-center items-center p-4 ">
      <div className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center border">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 text-center">
          Add New Recall
        </h2>

        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          {/* Title */}
          <input
            type="text"
            name="title"
            id="title"
            className="w-full bg-transparent border-b border-gray-300 focus:border-purple-400 focus:outline-none px-2 py-2 text-lg placeholder-gray-400"
            required
            placeholder="Recall's Title"
            value={form.title}
            onChange={handleChange}
          />

          {/* Description */}
          <textarea
            name="desc"
            id="desc"
            className="w-full bg-transparent border-none focus:outline-none px-2 py-2 h-40 resize-none placeholder-gray-400 text-gray-700"
            placeholder="Write your memory in detail..."
            onChange={handleChange}
            value={form.desc}
            required
          />

          {/* Date & Time */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <input
              type="date"
              name="date"
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white/70 w-full sm:w-auto"
              value={form.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white/70 w-full sm:w-auto"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* File Upload */}
          <div className="w-full border border-dashed border-gray-300 rounded-lg p-3 bg-white/60 text-center text-sm text-gray-500">
            <input
              type="file"
              name="file"
              id="file"
              className="w-full cursor-pointer"
              value={form.file}
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-linear-to-r from-purple-400 to-blue-400 text-white rounded-full px-6 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto self-center"
          >
            Save Recall
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewRecall;
