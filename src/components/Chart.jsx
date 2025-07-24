const Chart = ({ value }) => {
  return (
    <div className="w-full h-6 bg-gray-200 rounded-full">
      <div className="h-full bg-[#FF6B35] rounded-full text-xs text-white text-center" style={{ width: `${value}%` }}>
        {value}%
      </div>
    </div>
  );
};

export default Chart;
