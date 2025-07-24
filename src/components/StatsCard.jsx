const StatsCard = ({ title, value }) => (
  <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-[#5D3FD3] mt-2">{value.toLocaleString()}</p>
  </div>
);

export default StatsCard;
