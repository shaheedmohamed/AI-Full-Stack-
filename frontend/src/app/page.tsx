"use client";
import { useState, useEffect, FormEvent } from "react";

interface Section {
  _id?: string;
  idea: string;
  sections: string[];
}

export default function Home() {
  const [idea, setIdea] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // جلب كل الأفكار من الباكند
  const fetchSections = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:3000/sections");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setSections(data);
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  // إرسال الفكرة
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:3000/sections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error("Failed to submit idea");
      setIdea("");
      await fetchSections();
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSections();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Website Section Suggestions</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Enter your website idea..."
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
          value={idea}
          onChange={e => setIdea(e.target.value)}
          disabled={loading}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded font-semibold disabled:opacity-50"
          disabled={loading || !idea.trim()}
        >
          {loading ? "Submitting..." : "Get Sections"}
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">All Ideas and Suggested Sections:</h2>
        {loading && sections.length === 0 ? (
          <div className="text-gray-400">Loading...</div>
        ) : sections.length === 0 ? (
          <div className="text-gray-400">No data yet.</div>
        ) : (
          <ul className="space-y-4">
            {sections.map((item, idx) => (
              <li key={item._id || idx} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="font-bold mb-1">{item.idea}</div>
                <div className="flex flex-wrap gap-2">
                  {item.sections.map((sec, i) => (
                    <span key={i} className="bg-blue-800 px-2 py-1 rounded text-xs">{sec}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}