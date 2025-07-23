import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Configure your dashboard settings.</p>
      <div className="mt-6 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            Email notifications
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Push notifications
          </label>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Theme</h3>
          <select className="w-full p-2 border rounded">
            <option>Light</option>
            <option>Dark</option>
            <option>Auto</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;