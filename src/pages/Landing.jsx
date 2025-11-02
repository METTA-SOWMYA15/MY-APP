import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-12">MY-APP</h1>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Students Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-12 py-6 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-xl font-semibold"
          >
            Students
          </button>

          {/* Companies Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-12 py-6 bg-green-600 rounded-lg hover:bg-green-500 transition text-xl font-semibold"
          >
            Companies
          </button>
        </div>
      </div>
    </div>
  );
}
