import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { isTokenExpired } from "../auth/auth";

function Recall() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const data = localStorage.getItem("data");
  const token = JSON.parse(data).token;
  // States
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("all");

  const today_date = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchRecalls();
  }, []);

  const fetchRecalls = async (req, res) => {
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/recall`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }
    try {
      const response = await axios.get(`${apiUrl}/recall/search?q=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // todayTasks filter logic
  const todayTasks = tasks.filter((t) => {
    let diffDays = (new Date(today_date) - new Date(t.date)) / 86400000;

    return (
      diffDays === 1 ||
      diffDays === 3 ||
      diffDays === 7 ||
      diffDays === 14 ||
      diffDays === 21
    );
  });

  // upcoming task logic

  const upcomingTasks = tasks.filter((t) => {
    let diffDays = (new Date(today_date) - new Date(t.date)) / 86400000;

    return (
      diffDays === 0 ||
      diffDays === 2 ||
      diffDays === 6 ||
      diffDays === 13 ||
      diffDays === 20
    );
  });

  // recent task logic

  const recentTasks = tasks
    .filter((t) => t.date.split("T")[0] < today_date)
    .slice(0, 5);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* 🔍 Search + Button */}
      <div className="flex justify-between items-center gap-4 flex-col md:flex-row max-w-5xl mx-auto">
        <div className="flex items-center border border-gray-200 bg-white/80 rounded-full px-3 py-2 shadow-sm w-full md:w-auto">
          <select
            className="bg-transparent focus:outline-none text-gray-500 text-sm"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="all">All</option>
            <option value="date">Date</option>
          </select>

          {search === "all" ? (
            <input
              type="text"
              name="search"
              id="search"
              className="bg-transparent focus:outline-none px-3 text-sm w-full"
              placeholder="Search your journal..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
          ) : (
            <input
              type="date"
              name="search"
              id="search"
              className="bg-transparent focus:outline-none px-3 text-sm w-full"
              placeholder="Search your journal..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
          )}

          <span className="border-l pl-3 text-gray-400" onClick={handleSearch}>
            🔍
          </span>
        </div>

        <button
          className="bg-linear-to-r hidden md:block from-purple-400 to-blue-400 text-white rounded-full px-5 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full md:w-auto"
          onClick={() => navigate("/recall/newrecall")}
        >
          Add New Recall ⨠
        </button>
      </div>

      {/* 📦 Sections */}
      <div className="max-w-5xl mx-auto mt-8 space-y-10">
        {/* 🔮 Today */}
        <div>
          <h2 className="border-l-4 border-fuchsia-600 px-3 text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
            Today's Recall
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {todayTasks.length > 0 ? (
              todayTasks.map((t, i) => {
                return (
                  <li
                    key={t._id}
                    className="bg-white/80 rounded-xl border border-gray-200 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {t.title}
                    </span>

                    <span className="text-sm text-gray-500 line-clamp-2">
                      {t.desc}
                    </span>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400 font-medium">
                        {t.date.split("T")[0]}
                      </span>

                      <button className="text-xs bg-gray-100 hover:bg-gray-200 transition px-3 py-1 rounded-full">
                        details
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <span>No Tasks</span>
            )}
          </ul>
        </div>

        {/* ⏳ Upcoming */}
        <div>
          <h2 className="border-l-4 border-sky-500 px-3 text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
            Upcoming Recall
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTasks.length > 0 ? (
              upcomingTasks.map((t, i) => {
                return (
                  <li
                    key={t._id}
                    className="bg-white/80 rounded-xl border border-gray-200 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {t.title}
                    </span>

                    <span className="text-sm text-gray-500 line-clamp-2">
                      {t.desc}
                    </span>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400 font-medium">
                        {t.date.split("T")[0]}
                      </span>

                      <button className="text-xs bg-gray-100 hover:bg-gray-200 transition px-3 py-1 rounded-full">
                        details
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <span>No Tasks</span>
            )}
          </ul>
        </div>

        {/* 🆕 Recent */}
        <div>
          <h2 className="border-l-4 border-green-500 px-3 text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
            Recently Added
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTasks.length > 0 ? (
              recentTasks.map((t, i) => {
                return (
                  <li
                    key={t._id}
                    className="bg-white/80   rounded-xl border border-gray-200 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {t.title}
                    </span>

                    <span className="text-sm text-gray-500 line-clamp-2">
                      {t.desc}
                    </span>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400 font-medium">
                        {t.date.split("T")[0]}
                      </span>

                      <button className="text-xs bg-gray-100 hover:bg-gray-200 transition px-3 py-1 rounded-full">
                        details
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <span>No Tasks</span>
            )}
          </ul>

          <button
            className="bg-linear-to-r inline-block mt-16 md:hidden from-purple-400 to-blue-400 text-white rounded-full px-5 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full md:w-auto"
            onClick={() => navigate("/recall/newrecall")}
          >
            Add New Recall ⨠
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recall;
