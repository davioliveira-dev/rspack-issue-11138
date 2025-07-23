import React from 'react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <p className="text-gray-600">View your analytics data here.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Page Views</h3>
          <p className="text-2xl font-bold text-blue-600">12,345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-2xl font-bold text-green-600">2,678</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold text-purple-600">3.45%</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;