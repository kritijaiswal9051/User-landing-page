import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../../Api";
import Hero from "../components/Hero";
import Search from "../components/Search";
import UserList from "../components/UserList";
import Pricing from "../components/Pricing";
import ContectForm from "../components/ContectForm";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchData();
      setUsers(data);
    };
    getUser();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Hero />
      <div className="mt-6 max-w-md mx-auto">
        <Search setSearch={setSearch} />
      </div>
      <UserList users={users} search={search} />
      <Pricing />
      <ContectForm />
    </div>
  );
}

export default Home;
