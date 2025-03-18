function Search({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search User"
      className="w-full p-2 border rounded-lg"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
