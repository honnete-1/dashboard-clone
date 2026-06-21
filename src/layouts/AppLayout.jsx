import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

// Think of this like the picture frame around a TV screen - the frame
// (Sidebar + Navbar) never changes, only the picture inside it does.
// <Outlet /> is React Router's way of saying "whichever page component
// matches the current URL goes here."
export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
