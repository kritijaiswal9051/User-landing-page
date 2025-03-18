function ContectForm() {
  return (
    <div className="mt-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded-lg mt-2"
      />
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
        Submit
      </button>
    </div>
  );
}

export default ContectForm;
