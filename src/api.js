// a simple data api that will be using to get players from
// foe our componentes. on a real webseite we would use a
// more robust data fetching solution.
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Filippe  Forward", position: "F" },
    { number: 7, name: "Ben Blocker", position: "G" },
  ],
  all: function () {
    return this.players;
  },
  get: function (id) {
    const isPlayer = (p) => p.number === id;
    return this.players.find(isPlayer);
  },
  add: function (p) {
    this.players.push(p);
  },
};
export default PlayerAPI;
