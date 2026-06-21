import { FiImage } from "react-icons/fi";
import { formatDate, formatRelativeTime } from "../utils/time.js";

// This component does NOT know about Context, the reducer, or where the
// image data came from. It just receives an `image` object and an
// `onClick` handler as props and renders them. That's what makes it
// "reusable" - the Recently Viewed row and the All Images grid both use
// this exact same component with different slices of the same array.
export default function ImageCard({ image, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full flex-col overflow-hidden rounded-card border border-border-soft bg-white text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      {/* Thumbnail - fixed height so cards line up evenly in the grid
          even when the source photos have different aspect ratios */}
      <div className="h-36 w-full overflow-hidden bg-gray-100">
        <img
          src={image.url}
          alt={image.name}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1 p-3">
        <span className="text-xs text-gray-400">
          Created on {formatDate(image.createdAt)}
        </span>

        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-800">
          <FiImage className="text-primary" size={14} />
          {image.name}
        </span>

        <span className="text-xs text-gray-400">
          You opened{" "}
          <span className="text-primary">{formatRelativeTime(image.lastOpenedAt)}</span>
        </span>
      </div>
    </button>
  );
}
