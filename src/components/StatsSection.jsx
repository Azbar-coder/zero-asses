import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import OpenDataModal from './OpenDataModal';
import CustomBtn from './CustomBtn';

const StatsSection = () => {
    const [stats, setStats] = useState({
        trips: 153245,
        drivers: 48988,
        users: 782900,
    });

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                trips: prev.trips + Math.floor(Math.random() * 5),
                drivers: prev.drivers,
                users: prev.users + Math.floor(Math.random() * 2),
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#F9FAFB] py-16 px-6 md:px-20" id='stats-section'>
            <h2 className="text-3xl font-bold text-center mb-10 text-[#333]"> ZeroRide Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <StatsCard title="Completed Trips" value={stats.trips} />
                <StatsCard title="Enabled Drivers" value={stats.drivers} />
                <StatsCard title="Registered Users" value={stats.users} />
            </div>
            <div className="flex justify-center mt-10">

                <CustomBtn
                    btnText="Explore Open Data"
                    onClick={() => setOpen(true)}
                />
            </div>

            {open && <OpenDataModal onClose={() => setOpen(false)} />}
        </div>
    );
};

export default StatsSection;
