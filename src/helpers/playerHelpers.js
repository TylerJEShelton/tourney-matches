export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((acc, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
}