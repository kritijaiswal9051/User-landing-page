function Pricing() {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold">Pricing Plans</h2>
      <div className="flex justify-center gap-4 mt-4">
        <div className="p-4 bg-blue-200 rounded-lg shadow-md">Basic - $19</div>
        <div className="p-4 bg-blue-300 rounded-lg shadow-md">Pro - $49</div>
        <div className="p-4 bg-blue-400 rounded-lg shadow-md">
          Enterprise - $99
        </div>
      </div>
    </div>
  );
}

export default Pricing;
