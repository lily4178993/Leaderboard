// Merge sort: sorted list to get highest score first
// Split the player list into sublists, sort them individually,
//  and then merge them into a single sorted list.

const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].score > right[j].score) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = (players) => {
  if (players.length <= 1) {
    return players;
  }

  const mid = Math.floor(players.length / 2);
  const left = players.slice(0, mid);
  const right = players.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const SORT_LIST = (playersData) => {
  const sortedPlayers = mergeSort(playersData);
  playersData.splice(0, playersData.length, ...sortedPlayers);
};

export { SORT_LIST as default };
