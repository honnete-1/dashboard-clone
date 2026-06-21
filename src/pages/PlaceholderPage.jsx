// Why ONE component for five different routes instead of five empty
// files? Because right now they all need to do the exact same thing:
// exist as a real route, so the sidebar's NavLink + routing actually
// works end-to-end. When a future sprint builds out the real Video page,
// it gets its OWN file at that point - this is just a stand-in.
export default function PlaceholderPage({ title }) {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2 rounded-card border border-dashed border-border-soft bg-white text-center">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="max-w-sm text-sm text-gray-500">
        This page is intentionally out of scope for this round. The route
        and sidebar link both work - there's just no UI built here yet.
      </p>
    </div>
  );
}
