// ---------------------------------------------------------------------
// MOCK DATA
// ---------------------------------------------------------------------
// In a real app this array would come from an API call (fetch/axios).
// Since this round of the assignment has NO backend, we just hardcode
// the array here ONCE, in its own file, and every component imports it
// indirectly through the ImageContext (see context/ImageContext.jsx).
//
// That's the whole point of "centralized state": if a teacher swaps this
// file for a different one with 30 images instead of 18, nothing in
// ImageCard.jsx or ImagesPage.jsx has to change at all.
// ---------------------------------------------------------------------

// Small helpers so the timestamps below read like plain English
// instead of a wall of new Date(Date.now() - 172800000) math.
const minutesAgo = (n) => new Date(Date.now() - n * 60 * 1000).toISOString();
const hoursAgo = (n) => new Date(Date.now() - n * 60 * 60 * 1000).toISOString();
const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

export const images = [
  {
    id: "img-001",
    name: "Gallery-1234725783.jpg",
    url: "https://picsum.photos/seed/dash-1/640/480",
    createdAt: "2020-12-13T10:00:00.000Z",
    lastOpenedAt: minutesAgo(1), // "just now"
  },
  {
    id: "img-002",
    name: "Gallery-25783.jpg",
    url: "https://picsum.photos/seed/dash-2/640/480",
    createdAt: "2020-12-13T10:00:00.000Z",
    lastOpenedAt: daysAgo(2),
  },
  {
    id: "img-003",
    name: "Gallery-49895383.jpg",
    url: "https://picsum.photos/seed/dash-3/640/480",
    createdAt: "2020-12-13T10:00:00.000Z",
    lastOpenedAt: daysAgo(31), // "a month ago"
  },
  {
    id: "img-004",
    name: "Gallery-4509853.jpg",
    url: "https://picsum.photos/seed/dash-4/640/480",
    createdAt: "2020-12-13T10:00:00.000Z",
    lastOpenedAt: daysAgo(2),
  },
  {
    id: "img-005",
    name: "Gallery-8820194.jpg",
    url: "https://picsum.photos/seed/dash-5/640/480",
    createdAt: "2021-01-04T10:00:00.000Z",
    lastOpenedAt: hoursAgo(6),
  },
  {
    id: "img-006",
    name: "Gallery-7728193.jpg",
    url: "https://picsum.photos/seed/dash-6/640/480",
    createdAt: "2021-01-04T10:00:00.000Z",
    lastOpenedAt: daysAgo(5),
  },
  {
    id: "img-007",
    name: "Gallery-3399281.jpg",
    url: "https://picsum.photos/seed/dash-7/640/480",
    createdAt: "2021-02-18T10:00:00.000Z",
    lastOpenedAt: daysAgo(9),
  },
  {
    id: "img-008",
    name: "Gallery-6612837.jpg",
    url: "https://picsum.photos/seed/dash-8/640/480",
    createdAt: "2021-02-18T10:00:00.000Z",
    lastOpenedAt: hoursAgo(2),
  },
  {
    id: "img-009",
    name: "Gallery-9981023.jpg",
    url: "https://picsum.photos/seed/dash-9/640/480",
    createdAt: "2021-03-02T10:00:00.000Z",
    lastOpenedAt: daysAgo(14),
  },
  {
    id: "img-010",
    name: "Gallery-1120384.jpg",
    url: "https://picsum.photos/seed/dash-10/640/480",
    createdAt: "2021-03-02T10:00:00.000Z",
    lastOpenedAt: daysAgo(60), // "2 months ago"
  },
  {
    id: "img-011",
    name: "Gallery-5567234.jpg",
    url: "https://picsum.photos/seed/dash-11/640/480",
    createdAt: "2021-04-21T10:00:00.000Z",
    lastOpenedAt: daysAgo(20),
  },
  {
    id: "img-012",
    name: "Gallery-7789012.jpg",
    url: "https://picsum.photos/seed/dash-12/640/480",
    createdAt: "2021-04-21T10:00:00.000Z",
    lastOpenedAt: minutesAgo(45),
  },
  {
    id: "img-013",
    name: "Gallery-3345671.jpg",
    url: "https://picsum.photos/seed/dash-13/640/480",
    createdAt: "2021-05-09T10:00:00.000Z",
    lastOpenedAt: daysAgo(3),
  },
  {
    id: "img-014",
    name: "Gallery-8890234.jpg",
    url: "https://picsum.photos/seed/dash-14/640/480",
    createdAt: "2021-05-09T10:00:00.000Z",
    lastOpenedAt: daysAgo(7),
  },
  {
    id: "img-015",
    name: "Gallery-2234098.jpg",
    url: "https://picsum.photos/seed/dash-15/640/480",
    createdAt: "2021-06-30T10:00:00.000Z",
    lastOpenedAt: daysAgo(120), // "4 months ago"
  },
  {
    id: "img-016",
    name: "Gallery-6671203.jpg",
    url: "https://picsum.photos/seed/dash-16/640/480",
    createdAt: "2021-06-30T10:00:00.000Z",
    lastOpenedAt: hoursAgo(12),
  },
  {
    id: "img-017",
    name: "Gallery-9034521.jpg",
    url: "https://picsum.photos/seed/dash-17/640/480",
    createdAt: "2021-07-15T10:00:00.000Z",
    lastOpenedAt: daysAgo(400), // "more than a year ago"
  },
  {
    id: "img-018",
    name: "Gallery-1145678.jpg",
    url: "https://picsum.photos/seed/dash-18/640/480",
    createdAt: "2021-07-15T10:00:00.000Z",
    lastOpenedAt: daysAgo(1),
  },
];
