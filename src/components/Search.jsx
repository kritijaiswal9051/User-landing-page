import { useEffect, useState } from "react";

function Search({ setSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(query);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [query, setSearch]);
  return (
    <input
      type="text"
      placeholder="Search User"
      className="w-full p-2 border rounded-lg"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
