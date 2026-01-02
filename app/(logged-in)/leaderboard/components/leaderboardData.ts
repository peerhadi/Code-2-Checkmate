
// app/leaderboard/components/leaderboardData.ts

export const leaderboardData = [
  {
    rank: 2,
    name: "shannon_kautzer",
    score: 1532,
    avatar: "https://picsum.photos/200?random=2",
  },
  {
    rank: 1,
    name: "marion_stiedemann",
    score: 1671,
    avatar: "https://picsum.photos/200?random=1",
  },
  {
    rank: 3,
    name: "billy_mraz",
    score: 1410,
    avatar: "https://picsum.photos/200?random=3",
  },
];

export const tableData = Array.from({ length: 8 }).map((_, i) => ({
  rank: i + 1,
  name: `player_${i + 1}`,
  solved: Math.floor(Math.random() * 500),
  rebirths: Math.floor(Math.random() * 10),
  rating: Number((Math.random() * 3000).toFixed(0)),
}));
