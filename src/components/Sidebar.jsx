import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiImage,
  FiVideo,
  FiFileText,
  FiFolder,
  FiTrash2,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";

// Each link group mirrors the reference site's section headers exactly
// ("FILE MANAGER", "PAGES", "OTHER"). Keeping this as a plain array of
// objects (instead of writing three near-identical <NavLink> blocks by
// hand) means adding a new page later is a one-line change, not a
// copy-paste job.
const fileManagerLinks = [{ to: "/file-manager/dashboard", label: "Dashboard", icon: FiGrid }];

const pageLinks = [
  { to: "/file-manager/images", label: "Image", icon: FiImage },
  { to: "/file-manager/videos", label: "Video", icon: FiVideo },
  { to: "/file-manager/documents", label: "Document", icon: FiFileText },
  { to: "/file-manager/all-files", label: "All Files", icon: FiFolder, badge: 21 },
  { to: "/file-manager/trash", label: "Trash", icon: FiTrash2 },
];

function SidebarLink({ to, label, icon: Icon, badge }) {
  return (
    <NavLink
      to={to}
      // NavLink gives us `isActive` for free - it compares the current
      // browser URL to this link's `to` prop. We don't need to track
      // "which page is active" in our own state anywhere; React Router
      // already IS the single source of truth for that.
      className={({ isActive }) =>
        `flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition ${
          isActive
            ? "border-l-4 border-primary bg-primary-50 text-primary"
            : "border-l-4 border-transparent text-gray-600 hover:bg-gray-50"
        }`
      }
    >
      <span className="flex items-center gap-3">
        <Icon size={16} />
        {label}
      </span>
      {badge !== undefined && (
        <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-border-soft bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
          H
        </div>
        <span className="text-lg font-bold text-gray-900">Hope UI</span>
      </div>

      {/* Mini profile card - placeholder identity, intentionally generic
          rather than copying a real person's name/photo from the reference */}
      <div className="mx-5 mb-6 flex flex-col items-center gap-2 rounded-card border border-border-soft bg-page p-4">
        <div className="h-14 w-14 overflow-hidden rounded-full bg-primary/10">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-900">Sarah Bickford</p>
          <p className="text-xs text-primary">@sarahb</p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-5 pb-6">
        <div>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            File Manager
          </p>
          <div className="space-y-1">
            {fileManagerLinks.map((link) => (
              <SidebarLink key={link.to} {...link} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Pages
          </p>
          <div className="space-y-1">
            {pageLinks.map((link) => (
              <SidebarLink key={link.to} {...link} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Other
          </p>
          <div className="space-y-1">
            {/* These two are visual-only this round - no auth system exists
                yet, so clicking them doesn't need to (and shouldn't) do
                anything beyond what's shown. */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-md border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <FiLogOut size={16} />
              Sign Out
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-md border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <FiHelpCircle size={16} />
              Help
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
