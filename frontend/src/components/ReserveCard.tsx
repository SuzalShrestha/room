'use client';
import React, { useState } from 'react';

interface ReserveCardProps {
    price: number;
    currency: string;
}

const ReserveCard: React.FC<ReserveCardProps> = ({ price, currency }) => {
    const [entryDate, setEntryDate] = useState('');
    const [months, setMonths] = useState(1);

    const totalPrice = price * months;

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="p-6 bg-white rounded-lg shadow-2xl w-full max-w-md">
            <div className="text-2xl font-semibold mb-4">
                {currency}{totalPrice.toLocaleString()} <span className="text-lg font-normal"> for {months} {months === 1 ? 'month' : 'months'}</span>
            </div>
            <div className="space-y-4 mb-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="entry">Entry Date</label>
                    <input
                        type="date"
                        id="entry"
                        value={entryDate}
                        onChange={(e) => setEntryDate(e.target.value)}
                        min={today}
                        className="border rounded-lg p-2 text-gray-700"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="months">Months to Stay</label>
                    <select
                        id="months"
                        value={months}
                        onChange={(e) => setMonths(parseInt(e.target.value))}
                        className="border rounded-lg p-2 text-gray-700"
                    >
                        {Array.from({ length: 12 }, (_, n) => (
                            <option key={n + 1} value={n + 1}>{n + 1} {n + 1 === 1 ? 'month' : 'months'}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Book Now
            </button>
            <div className="text-center text-gray-500 mt-2">
                You won&apos;t be charged yet.
            </div>
        </div>
    );
};

export default ReserveCard;
