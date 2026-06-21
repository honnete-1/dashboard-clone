import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { formatDate, formatRelativeTime } from "../utils/time.js";

// `image` will be `null` whenever nothing is selected - the parent only
// renders <ImagePreviewModal /> at all when there IS an image to show,
// but we double-guard with `if (!image) return null` in case that
// changes later.
export default function ImagePreviewModal({ image, onClose }) {
  // Let people close the modal by pressing Escape - small touch, but it's
  // the kind of thing that makes an app feel finished instead of like a
  // student project.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    // Clicking the dark backdrop closes the modal. We stop the click from
    // "bubbling up" when it happens INSIDE the white card, otherwise
    // clicking the image itself would also close the modal.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-card bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img src={image.url} alt={image.name} className="h-72 w-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-gray-700 shadow hover:bg-white"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Read-only metadata only - no rename / delete buttons here.
            That's intentional: this round of the assignment is view-only. */}
        <div className="space-y-1 p-5">
          <h2 className="text-base font-semibold text-gray-900">{image.name}</h2>
          <p className="text-sm text-gray-500">Created on {formatDate(image.createdAt)}</p>
          <p className="text-sm text-gray-500">
            You opened <span className="text-primary">{formatRelativeTime(image.lastOpenedAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
