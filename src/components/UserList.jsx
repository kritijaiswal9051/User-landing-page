function UserList({ users, search }) {
  return users && users.length ? (
    <ul className="mt-6 max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((user) => (
          <li key={user.id} className="p-2 border-b cursor-pointer">
            {user.name}
          </li>
        ))}
    </ul>
  ) : (
    <div className="font-semibold text-center">Loading....</div>
  );
}

export default UserList;
