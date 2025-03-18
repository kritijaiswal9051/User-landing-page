import img from "../assets/imgg.jpg";

function Hero() {
  return (
    <div className="text-center bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <img
        src={img}
        alt="Hero"
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
    </div>
  );
}

export default Hero;
