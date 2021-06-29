const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};
const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//ACTION CREATOR

export default gamesReducer;
