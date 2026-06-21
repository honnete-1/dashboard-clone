// ---------------------------------------------------------------------
// Tiny date helpers. Nothing fancy - we're not pulling in a whole
// library like day.js just to format two strings.
// ---------------------------------------------------------------------

// "2020-12-13T10:00:00.000Z" -> "Dec 13, 2020"
// Used for the "Created on ..." line on every image card.
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// "2020-12-13T10:00:00.000Z" -> "3 days ago" / "just now" / "a month ago"
// Used for the "You opened ... ago" line. This is what makes
// "Recently Viewed" actually mean something instead of being a label
// sitting on top of random data.
export function formatRelativeTime(isoString) {
  const then = new Date(isoString).getTime();
  const now = Date.now();
  const diffMs = now - then;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diffMs < minute) return "just now";
  if (diffMs < hour) {
    const mins = Math.round(diffMs / minute);
    return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  }
  if (diffMs < day) {
    const hrs = Math.round(diffMs / hour);
    return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  }
  if (diffMs < month) {
    const days = Math.round(diffMs / day);
    return days === 1 ? "a day ago" : `${days} days ago`;
  }
  if (diffMs < year) {
    const months = Math.round(diffMs / month);
    return months === 1 ? "a month ago" : `${months} months ago`;
  }
  const years = Math.round(diffMs / year);
  return years === 1 ? "a year ago" : `${years} years ago`;
}
