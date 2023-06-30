import { getAllPlayers, myGameID } from './api/read.js';
import errorRefresh from './alertMessage.js';
import myBoardList from './scoreboard.js';
import sortList from './sortList.js';

let lastData = null; // Variable to store the latest recovered data

// Make the request to the API to get the latest data
// Return data as a Promise
const FETCH_DATA = () => getAllPlayers(myGameID);

// Compare the latest data with new data
const HAS_NEW_DATA = (data) => JSON.stringify(data) !== JSON.stringify(lastData);

const REFRESH_DATA = () => {
  FETCH_DATA()
    .then((data) => {
      if (HAS_NEW_DATA(data)) {
        lastData = data;
        // Perform actions for new data
        sortList(lastData);
        myBoardList(lastData);
      }
    })
    .catch(() => {
      errorRefresh();
    });
};

export { REFRESH_DATA as default };
