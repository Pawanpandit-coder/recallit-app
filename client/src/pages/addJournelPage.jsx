import axios from "axios";
import React, { useState } from "react";
import { isTokenExpired } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function AddJournelPage() {
  const [loading, setLoading] = useState(false)
  const data = localStorage.getItem("data");
  const token = JSON.parse(data).token;
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
      })
      .slice(0, 5),
  );

  const addJournel = async function () {
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }
    try {
      setLoading(true)
      const res = await axios.post(
        `${apiUrl}/journel`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setTitle('')
      setContent('')
    } catch (err) {
      console.error(err);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex justify-start items-center flex-col p-4">
      <div className="w-full max-w-2xl bg-white/80 border rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center">
          Write your day 🎃
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Capture your thoughts and memories
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Title of Journal..."
            className="w-full bg-transparent border-b border-gray-300 focus:border-purple-400 focus:outline-none px-2 py-2 text-lg placeholder-gray-400 transition-all"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            name="content"
            id="content"
            className="w-full bg-transparent border-none focus:outline-none px-2 py-2 h-40 resize-none placeholder-gray-400 text-gray-700"
            placeholder="Start writing your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white/70 w-full sm:w-auto"
            required
          />

          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white/70 w-full sm:w-auto"
            required
          />
        </div>

        <button
        disabled= {loading}
          className="bg-linear-to-r flex justify-center items-center from-purple-400 to-blue-400 text-white rounded-full px-6 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          onClick={addJournel}
        >
          Save Journal
          {loading && (
            <span className="w-4 h-4 border-3 align-middle mx-1 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
          )}
        </button>
      </div>
    </div>
  );
}

export default AddJournelPage;
