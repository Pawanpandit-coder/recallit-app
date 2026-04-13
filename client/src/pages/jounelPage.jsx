import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from "../auth/auth";
import { useLoader } from "../context/LoaderContext";

function JournelPage() {

  const {setLoading} = useLoader();

  const data = localStorage.getItem("data");
  const token = JSON.parse(data).token;
  const apiUrl = import.meta.env.VITE_API_URL;
  const [journels, setJournels] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("all");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const fetchJournels = async (pageNum = 1) => {
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }
    try {
      setLoading(true)
      const res = await axios.get(`${apiUrl}/journel?page=${pageNum}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (pageNum === 1) {
        setJournels(res.data);
      } else {
        setJournels((prev) => [...prev, ...res.data]);
      }
    } catch (err) {
      console.error(err);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchJournels();
  }, []);

  const addJournel = function () {
    navigate("/journel/add");
  };

  const showJournelDetails = () => {
    // alert("details");
    console.log("card pe click kam kar raha hian");
  };

  const handleSearch = async () => {
    if (isTokenExpired()) {
      navigate("/auth/login");
      return;
    }
    try {
      const response = await axios.get(`${apiUrl}/journel/search?q=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJournels(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" flex flex-col items-center gap-6 py-6 px-4">
      {/* 🔍 Search + Button */}
      <div className="flex justify-between items-center gap-4 flex-col md:flex-row w-full max-w-5xl">
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

          <span className="border-l pl-3 text-gray-400">🔍</span>
        </div>

        <button
          className="bg-linear-to-r hidden md:inline-block from-purple-400 to-blue-400 text-white rounded-full px-5 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full md:w-auto"
          onClick={() => addJournel()}
        >
          Add New Journal ⨠
        </button>
      </div>

      {/* 📓 Journal List */}
      <div className="w-full max-w-5xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[10vh]">
          {journels.length !== 0 ? (
            journels.map((journel) => (
              <li
                key={journel._id}
                className="bg-white/80 border border-gray-200 rounded-2xl p-4 flex flex-col justify-between gap-3 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                onClick={showJournelDetails}
              >
                {/* Title */}
                <div>
                  <span className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                    {journel.title}
                  </span>
                </div>

                {/* Optional Body Space */}
                <div className="text-sm text-gray-500 line-clamp-2 self-start">
                  <span className="text-md sm:text-lg font-light text-gray-400 line-clamp-2">
                    {journel.content.length > 10
                      ? journel.content.slice(0, 70) + "..."
                      : journel.content}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center flex-wrap gap-2 mt-2">
                  <span className="text-xs text-gray-400">
                    {new Date(journel.date).toLocaleString()}
                  </span>

                  <button className="text-xs bg-gray-100 hover:bg-gray-200 transition px-3 py-1 rounded-full">
                    see details
                  </button>
                </div>
              </li>
            ))
          ) : (
            <span className="flex justify-center items-center font-semibold">
              No Journals
            </span>
          )}
        </ul>
        {journels.length !== 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchJournels(nextPage);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Load More
            </button>
          </div>
        )}

        <button
          className="bg-linear-to-r mt-16 md:hidden inline-block from-purple-400 to-blue-400 text-white rounded-full px-5 py-2 shadow-md hover:scale-105 transition-all duration-200 w-full md:w-auto"
          onClick={() => addJournel()}
        >
          Add New Journal ⨠
        </button>
      </div>
    </div>
  );
}

export default JournelPage;
