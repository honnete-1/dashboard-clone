import { useContext, useMemo } from "react";
import { ImageContext } from "../context/ImageContext.jsx";

// Why a custom hook instead of just calling useContext(ImageContext)
// everywhere? Two reasons:
//   1. If you forget to wrap your app in <ImageProvider>, useContext()
//      would silently hand you `null` and you'd get a confusing crash
//      three lines later. This hook fails loudly, right where the mistake
//      actually is.
//   2. Every derived value (recentlyViewed, filteredImages, previewImage)
//      gets calculated in ONE place instead of being copy-pasted into
//      every component that needs it.
export function useImages() {
  const context = useContext(ImageContext);

  if (!context) {
    throw new Error("useImages() must be called inside an <ImageProvider>");
  }

  const {
    images,
    searchTerm,
    previewImageId,
    setSearchTerm,
    openPreview,
    closePreview,
  } = context;

  // ---- Derived view: "Recently Viewed" -------------------------------
  // This is the part the assignment specifically calls out: don't keep a
  // second hardcoded array for "recently viewed". Instead, take the SAME
  // images array and sort a *copy* of it (spreading into [...images] so we
  // never mutate the original) by lastOpenedAt, newest first, then grab
  // the top 4. If someone "opens" a different image later and we update
  // lastOpenedAt, this list would reorder itself automatically - because
  // it's computed, not stored separately.
  const recentlyViewed = useMemo(() => {
    return [...images]
      .sort((a, b) => new Date(b.lastOpenedAt) - new Date(a.lastOpenedAt))
      .slice(0, 4);
  }, [images]);

  // ---- Derived view: the searchable grid ------------------------------
  // useMemo means this filtering only re-runs when `images` or
  // `searchTerm` actually change - not on every single re-render of the
  // page for unrelated reasons (like the modal opening/closing).
  const filteredImages = useMemo(() => {
    if (!searchTerm.trim()) return images;
    const term = searchTerm.toLowerCase();
    return images.filter((image) => image.name.toLowerCase().includes(term));
  }, [images, searchTerm]);

  // ---- Derived value: which image object the modal should show -------
  // We only ever store the ID in state (previewImageId), never the whole
  // object. Looking the full object up here means there is exactly one
  // "real" copy of each image's data, living in the `images` array.
  const previewImage = useMemo(
    () => images.find((image) => image.id === previewImageId) || null,
    [images, previewImageId]
  );

  return {
    images,
    recentlyViewed,
    filteredImages,
    searchTerm,
    setSearchTerm,
    previewImage,
    openPreview,
    closePreview,
  };
}
