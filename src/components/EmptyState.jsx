import { FiImage } from "react-icons/fi";

// `message` lets us reuse this for two slightly different situations:
// "the whole dataset is empty" vs "your search didn't match anything".
export default function EmptyState({ message = "No images yet." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-card border border-dashed border-border-soft bg-white py-16 text-center">
      <div className="rounded-full bg-primary-50 p-4 text-primary">
        <FiImage size={28} />
      </div>
      <p className="text-sm font-medium text-gray-600">{message}</p>
    </div>
  );
}
