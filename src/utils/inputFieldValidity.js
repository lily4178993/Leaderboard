import myGameID from './api/gameID.js';
import createNewPlayer from './api/create.js';

const CHECK_INPUT_VALIDITY = () => {
  const INPUT_USERNAME = document.getElementById('username');
  const INPUT_SCORE = document.getElementById('score');

  const INPUT_USERNAME_VALUE = INPUT_USERNAME.value;
  const INPUT_SCORE_VALUE = parseInt(INPUT_SCORE.value, 10);

  if (INPUT_SCORE_VALUE && INPUT_USERNAME_VALUE && INPUT_USERNAME_VALUE.trim() !== '') {
    createNewPlayer(`${myGameID}`, INPUT_USERNAME_VALUE, INPUT_SCORE_VALUE);
  }
  INPUT_USERNAME.value = '';
  INPUT_SCORE.value = '';
};

export { CHECK_INPUT_VALIDITY as default };