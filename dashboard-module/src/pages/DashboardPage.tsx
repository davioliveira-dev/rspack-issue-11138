import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to the dashboard home page.</p>
      <p>is hmr working? please check</p>
      <p>what about now?</p>
      <p>please say its working</p>
      <p>please say its working</p>
      ITS WORKINGG LFGGGG I CANT BELEIVE IT WITH LAZY LOADING???
      <Button onClick={() => navigate("/")}>Click me with HMR</Button>
    </div>
  );
}
