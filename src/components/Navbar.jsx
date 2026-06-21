import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiBell, FiChevronDown } from "react-icons/fi";
import { useImages } from "../hooks/useImages.js";

// A small lookup so the navbar's title on the left says "Images",
// "Videos", etc. depending on which route we're on - instead of writing
// a separate Navbar per page, this one component adapts itself.
const pageTitles = {
  "/file-manager/dashboard": "Dashboard",
  "/file-manager/images": "Images",
  "/file-manager/videos": "Videos",
  "/file-manager/documents": "Documents",
  "/file-manager/all-files": "All Files",
  "/file-manager/trash": "Trash",
};

export default function Navbar() {
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useImages();
  const [profileOpen, setProfileOpen] = useState(false);

  const title = pageTitles[location.pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border-soft bg-white px-6 py-4">
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

      <div className="flex items-center gap-4">
        {/* This search box is the "optional" live filter from the brief.
            It only filters the existing array in state through
            setSearchTerm - it never adds/removes/edits an image. We only
            actually USE the result of this on the Images page, but it's
            harmless to leave visible (and disabled-looking) elsewhere. */}
        <div className="hidden items-center gap-2 rounded-md border border-border-soft bg-page px-3 py-2 sm:flex">
          <FiSearch className="text-gray-400" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search..."
            className="w-32 bg-transparent text-sm outline-none placeholder:text-gray-400 md:w-48"
          />
        </div>

        <button
          type="button"
          aria-label="Cart"
          className="relative rounded-full bg-page p-2 text-gray-500 hover:text-primary"
        >
          <FiShoppingCart size={18} />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-semibold text-white">
            2
          </span>
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-full bg-page p-2 text-gray-500 hover:text-primary"
        >
          <FiBell size={18} />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-info text-[10px] font-semibold text-white">
            5
          </span>
        </button>

        {/* Profile dropdown - this is local UI state (is the menu open or
            not). It has nothing to do with the image data, so it lives
            here with useState instead of in our global Context. Not
            every piece of state needs to be "global". */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((open) => !open)}
            className="flex items-center gap-1 rounded-full"
          >
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Account"
              className="h-9 w-9 rounded-full object-cover"
            />
            <FiChevronDown size={14} className="text-gray-400" />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-44 overflow-hidden rounded-card border border-border-soft bg-white py-1 shadow-card"
              // Closing the menu when you click a menu item - simple UX
              // touch, real menus shouldn't stay stuck open forever.
              onClick={() => setProfileOpen(false)}
            >
              <button className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-page">
                Profile
              </button>
              <button className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-page">
                Privacy Settings
              </button>
              <button className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-page">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
