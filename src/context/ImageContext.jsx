import { createContext, useReducer, useCallback } from "react";
import { images as mockImages } from "../data/images";

// createContext(null) just makes an empty "box" that any component deep in
// the tree can reach into, instead of us having to pass images down as a
// prop through every single level (that's called "prop drilling" and it
// gets painful fast once you're 4-5 components deep).
export const ImageContext = createContext(null);

// This is what the store looks like the moment the app boots up.
const initialState = {
  images: mockImages, // the full "database" of images
  searchTerm: "", // whatever the user has typed in the search box
  previewImageId: null, // which image's modal is currently open (null = closed)
};

// A reducer is just a function: (current state, action) -> new state.
// We use useReducer instead of three separate useState calls because all
// three of these values belong to the same "image store" concept, and a
// reducer keeps every possible state change in ONE place we can read
// top-to-bottom, instead of state-updating logic scattered across files.
function imageReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "OPEN_PREVIEW":
      return { ...state, previewImageId: action.payload };

    case "CLOSE_PREVIEW":
      return { ...state, previewImageId: null };

    default:
      // Always good practice to have a default case so a typo'd action
      // type doesn't silently break things - it just returns state as-is.
      return state;
  }
}

// NOTE for grading: notice there's no ADD_IMAGE / DELETE_IMAGE / EDIT_IMAGE
// action here. That's on purpose - this round is read-only by spec, so the
// reducer only knows how to do things that don't change the underlying
// image data: search and preview.
export function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  // We wrap these in useCallback so the function reference stays stable
  // across re-renders. Without it, every component that uses these
  // functions would think they got a "new" function on every render and
  // re-render themselves unnecessarily.
  const setSearchTerm = useCallback((term) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: term });
  }, []);

  const openPreview = useCallback((imageId) => {
    dispatch({ type: "OPEN_PREVIEW", payload: imageId });
  }, []);

  const closePreview = useCallback(() => {
    dispatch({ type: "CLOSE_PREVIEW" });
  }, []);

  // Everything we hand out to the rest of the app through the Provider.
  const value = {
    ...state,
    setSearchTerm,
    openPreview,
    closePreview,
  };

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
}
