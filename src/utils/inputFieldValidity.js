import createNewPlayer from './api/create.js';

const CHECK_INPUT_VALIDITY = () => {
  const INPUT_USERNAME = document.getElementById('username');
  const INPUT_SCORE = document.getElementById('score');

  const INPUT_USERNAME_VALUE = INPUT_USERNAME.value.trim();
  const INPUT_SCORE_VALUE = INPUT_SCORE.value.trim();

  if (INPUT_SCORE_VALUE && INPUT_USERNAME_VALUE) {
    createNewPlayer('Zl4d7I488d4eb0267g2fUdz', INPUT_USERNAME_VALUE, INPUT_SCORE_VALUE);
  }
  INPUT_USERNAME.value = '';
  INPUT_SCORE.value = '';
};

export { CHECK_INPUT_VALIDITY as default };