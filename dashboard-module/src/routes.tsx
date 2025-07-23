import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const AnalyticsPage = lazy(() => import("./pages/AnalyticsPage"));

const routes: RouteObject[] = [
	{
		path: "/dashboard",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<DashboardPage />
			</Suspense>
		),
	},
	{
		path: "/dashboard/analytics",
		element: <AnalyticsPage />,
	},
	{
		path: "/dashboard/settings",
		element: <SettingsPage />,
	},
];

export default routes;
