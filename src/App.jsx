import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import ImagesPage from "./pages/ImagesPage.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* Every route below is nested INSIDE AppLayout, so Sidebar + Navbar
          render once and stay put, while only the matched child swaps in
          through <Outlet />. */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/file-manager/images" replace />} />

        <Route
          path="file-manager/dashboard"
          element={<PlaceholderPage title="Dashboard" />}
        />

        {/* The one fully-built page this round */}
        <Route path="file-manager/images" element={<ImagesPage />} />

        <Route
          path="file-manager/videos"
          element={<PlaceholderPage title="Videos" />}
        />
        <Route
          path="file-manager/documents"
          element={<PlaceholderPage title="Documents" />}
        />
        <Route
          path="file-manager/all-files"
          element={<PlaceholderPage title="All Files" />}
        />
        <Route
          path="file-manager/trash"
          element={<PlaceholderPage title="Trash" />}
        />
      </Route>
    </Routes>
  );
}
