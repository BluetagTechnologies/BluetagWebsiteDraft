/**
 * Theme Mode Switch
 * Switch betwen light/dark mode. The chosen mode is saved to browser's local storage
*/

const themeModeSwitch = (() => {

  let modeSwitch = document.querySelector('[data-bs-toggle="mode"]');

  if (modeSwitch === null) return;

  let checkbox = modeSwitch.querySelector('.form-check-input');
  let imgTag = document.querySelector('img[alt="BlueTag Tech logo"]');

  if (mode === 'dark') {
    root.classList.add('dark-mode');
    imgTag.src = 'assets/img/BlueTag-Tech-logo-dark-bg.svg';
    checkbox.checked = true;
  } else {
    imgTag.src = 'assets/img/BlueTag-Tech-logo-light-bg.svg';
    root.classList.remove('dark-mode');
    checkbox.checked = false;
  }

  modeSwitch.addEventListener('click', (e) => {
    if (checkbox.checked) {
      root.classList.add('dark-mode');
      imgTag.src = 'assets/img/BlueTag-Tech-logo-dark-bg.svg';
      window.localStorage.setItem('mode', 'dark');
    } else {
      root.classList.remove('dark-mode');
      imgTag.src = 'assets/img/BlueTag-Tech-logo-light-bg.svg';
      window.localStorage.setItem('mode', 'light');
    }
  });
})();

export default themeModeSwitch;
