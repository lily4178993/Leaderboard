import errorIcon from '../assets/icon-error.png';

const ERROR_REFRESH = document.getElementById('error-refresh');
const ERROR_IMAGE_ELEMENT = document.createElement('img');

const ERROR_REFRESH_MESSAGE = () => {
  ERROR_IMAGE_ELEMENT.src = errorIcon;
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

export {
  ERROR_REFRESH_MESSAGE as errorRefresh,
  ALERT_SUBMIT_MESSAGE as alertSubmitMessage,
};