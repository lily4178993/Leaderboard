/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/api/gameID.js
const MY_GAME_ID = 'OT2f7kxrVg5BqG0Bd9VT';


;// CONCATENATED MODULE: ./src/utils/api/read.js


const read_MY_GAME_ID = MY_GAME_ID;
const GET_ALL_PLAYERS = async (gameID = `${read_MY_GAME_ID}`) => {
  const REQUEST_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const REQUEST = new Request(REQUEST_URL);
  const RESPONSE = await fetch(REQUEST);
  const SCOREBOARD = await RESPONSE.json();

  return SCOREBOARD.result;
};


;// CONCATENATED MODULE: ./src/assets/icon-error.png
const icon_error_namespaceObject = __webpack_require__.p + "5abd57eac60fbbbd1f34.png";
;// CONCATENATED MODULE: ./src/utils/alertMessage.js


const ERROR_REFRESH = document.getElementById('error-refresh');
const ERROR_IMAGE_ELEMENT = document.createElement('img');

const ERROR_REFRESH_MESSAGE = () => {
  ERROR_IMAGE_ELEMENT.src = icon_error_namespaceObject;
  ERROR_REFRESH.innerHTML = 'Error refreshing data.';
  ERROR_REFRESH.appendChild(ERROR_IMAGE_ELEMENT);
  ERROR_REFRESH.style.display = 'block';
  setTimeout(() => { ERROR_REFRESH.style.display = 'none'; }, 2000);
};

const ALERT_SUBMIT_MESSAGE = () => {
  const SNACKBAR = document.getElementById('snackbar');
  SNACKBAR.className = 'show';
  setTimeout(() => {
    SNACKBAR.className = SNACKBAR.className.replace('show', '');
  }, 3000);
};


;// CONCATENATED MODULE: ./src/utils/scoreboard.js
const SCORE_BOARD = document.querySelector('.scoreboard-container');
const SCORE_LIST = document.querySelector('.scoreboard-container .body');

const MY_BOARD_LIST = (playersData) => {
  SCORE_LIST.innerHTML = '';
  const players = playersData;
  for (let i = 0; i < players.length; i += 1) {
    const player = players[i];
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.innerHTML = `${player.user}: ${player.score}`;
    SCORE_LIST.appendChild(LIST_ITEM);
  }
  SCORE_BOARD.appendChild(SCORE_LIST);
};


;// CONCATENATED MODULE: ./src/utils/sortList.js
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



;// CONCATENATED MODULE: ./src/utils/refreshData.js





let lastData = null; // Variable to store the latest recovered data

// Make the request to the API to get the latest data
// Return data as a Promise
const FETCH_DATA = () => GET_ALL_PLAYERS(read_MY_GAME_ID);

// Compare the latest data with new data
const HAS_NEW_DATA = (data) => JSON.stringify(data) !== JSON.stringify(lastData);

const REFRESH_DATA = () => {
  FETCH_DATA()
    .then((data) => {
      if (HAS_NEW_DATA(data)) {
        lastData = data;
        // Perform actions for new data
        SORT_LIST(lastData);
        MY_BOARD_LIST(lastData);
      }
    })
    .catch(() => {
      ERROR_REFRESH_MESSAGE();
    });
};



;// CONCATENATED MODULE: ./src/utils/api/create.js
const CREATE_NEW_PLAYER = async (gameID, playerName, currentScore) => {
  const REQUEST_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const newObject = {
    user: playerName,
    score: currentScore,
  };
  const REQUEST = new Request(REQUEST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObject),
  });
  await fetch(REQUEST);
};


;// CONCATENATED MODULE: ./src/utils/inputFieldValidity.js



const CHECK_INPUT_VALIDITY = () => {
  const INPUT_USERNAME = document.getElementById('username');
  const INPUT_SCORE = document.getElementById('score');

  const INPUT_USERNAME_VALUE = INPUT_USERNAME.value;
  const INPUT_SCORE_VALUE = parseInt(INPUT_SCORE.value, 10);

  if (INPUT_SCORE_VALUE && INPUT_USERNAME_VALUE && INPUT_USERNAME_VALUE.trim() !== '') {
    CREATE_NEW_PLAYER(`${MY_GAME_ID}`, INPUT_USERNAME_VALUE, INPUT_SCORE_VALUE);
  }
  INPUT_USERNAME.value = '';
  INPUT_SCORE.value = '';
};


;// CONCATENATED MODULE: ./src/index.js





const FORM_ELEMENT = document.querySelector('.add-score-container form');
FORM_ELEMENT.addEventListener('submit', (event) => {
  event.preventDefault();
  CHECK_INPUT_VALIDITY();
  ALERT_SUBMIT_MESSAGE();
});

// Add an eventListener on BUTTON_REFRESH
// Consume API to get new uptade of the players and their score
const BUTTON_REFRESH = document.getElementById('btn-refresh');
const MY_SCOREBOARD = () => BUTTON_REFRESH.addEventListener('click', REFRESH_DATA);

MY_SCOREBOARD();
/******/ })()
;