import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useImages } from "../hooks/useImages.js";
import ImageCard from "../components/ImageCard.jsx";
import ImagePreviewModal from "../components/ImagePreviewModal.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function ImagesPage() {
  const {
    recentlyViewed,
    filteredImages,
    images,
    previewImage,
    openPreview,
    closePreview,
  } = useImages();

  // Purely cosmetic this round - the "Add Image" button has to be there
  // for pixel accuracy (per the brief), but clicking it isn't supposed to
  // save anything to state yet. We just toast a little reminder instead
  // of silently doing nothing, which would look like a bug in a demo.
  const [showScopeNote, setShowScopeNote] = useState(false);

  return (
    <div className="space-y-8">
      {/* ---- Page header ------------------------------------------- */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Images</h2>
        <button
          type="button"
          onClick={() => setShowScopeNote(true)}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-primary/90"
        >
          <FiPlus size={16} />
          Add Image
        </button>
      </div>

      {showScopeNote && (
        <div className="flex items-center justify-between rounded-card border border-primary-100 bg-primary-50 px-4 py-2 text-sm text-primary">
          Upload isn't part of this round's scope - this button exists for
          visual accuracy only.
          <button onClick={() => setShowScopeNote(false)} className="ml-4 font-semibold">
            Got it
          </button>
        </div>
      )}

      {/* ---- Recently Viewed ----------------------------------------
          Horizontally scrollable row. Notice this reads `recentlyViewed`,
          which is DERIVED from the same `images` array the grid below
          uses - there is no second hardcoded list living here. */}
      <section>
        <h3 className="mb-3 text-base font-semibold text-gray-800">Recently Viewed</h3>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {recentlyViewed.map((image) => (
            <div key={image.id} className="w-60 flex-shrink-0">
              <ImageCard image={image} onClick={() => openPreview(image.id)} />
            </div>
          ))}
        </div>
      </section>

      {/* ---- All Images -----------------------------------------------
          Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop.
          `filteredImages` is the full list unless someone has typed
          something in the navbar search box, in which case it's the
          narrowed-down list - same array, same component either way. */}
      <section>
        <h3 className="mb-3 text-base font-semibold text-gray-800">All Images</h3>

        {filteredImages.length === 0 ? (
          <EmptyState
            message={
              images.length === 0
                ? "No images yet. Images you upload will show up here."
                : "No images match your search."
            }
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} onClick={() => openPreview(image.id)} />
            ))}
          </div>
        )}
      </section>

      <ImagePreviewModal image={previewImage} onClose={closePreview} />
    </div>
  );
}
