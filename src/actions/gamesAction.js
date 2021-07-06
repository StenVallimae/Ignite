import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";
import { searchGameURL } from "../api";

//action creater
export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searchedGames: searchGames.data.results,
    },
  });
};
