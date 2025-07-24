import React, { useState } from 'react';
import Chart from '../components/Chart.jsx';
import CustomBtn from '../components/CustomBtn.jsx';

const todayData = {
    trips: 123,
    searches: 340,
    earnings: '₹5,200',
    conversion: 45,
};

const allTimeData = {
    trips: 12000,
    searches: 35000,
    earnings: '₹7,40,000',
    users: 8000,
    drivers: 510,
};

const OpenDataModal = ({ onClose }) => {
    const [tab, setTab] = useState('today');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center mb-32">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-4xl relative">
                <button className="absolute top-3 right-4 text-gray-500" onClick={onClose}>✖</button>
                <div className="flex gap-4 mb-6">
                    <CustomBtn
                        btnText="Today Data"
                        onClick={() => setTab('today')}
                        className={`px-4 py-2 rounded ${tab === 'today' ? 'bg-[#5D3FD3] text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    />
                    <CustomBtn
                        btnText="All Time Data"
                        onClick={() => setTab('all')}
                        className={`${tab === 'all' ? 'bg-[#5D3FD3] text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded`}
                    />

                </div>

                {tab === 'today' ? (
                    <div className="grid grid-cols-2 gap-4 text-gray-800">
                        <p>Completed Trips: {todayData.trips}</p>
                        <p>Searches: {todayData.searches}</p>
                        <p>Driver Earnings: {todayData.earnings}</p>
                        <div className="col-span-2">
                            <Chart value={todayData.conversion} />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 text-gray-800">
                        <p>Completed Trips: {allTimeData.trips}</p>
                        <p>Searches: {allTimeData.searches}</p>
                        <p>Driver Earnings: {allTimeData.earnings}</p>
                        <p>Registered Users: {allTimeData.users}</p>
                        <p>Enabled Drivers: {allTimeData.drivers}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OpenDataModal;
