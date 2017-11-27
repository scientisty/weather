/*
 * Implements a loading overlay using spin.js
 * Unless there is another clever solution, requires spin.js be included in html <script>.
 */


/*
 * Creates overlay and starts spinner
 * Implicity creates overlay and spinner global vars, so be careful!
 */
function startOverlay() {
  var opts = {
    scale: 2,
    color: '#fff',
    opacity: 0,
    trail: 100
  };
  spinner = new Spinner(opts).spin();

  overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';

  overlay.style.backgroundColor = 'rgba(0, 0, 0, .75)';

  overlay.appendChild(spinner.el);
  document.body.appendChild(overlay);
}


/*
 * Stops spinner and removes overlay
 */
function stopOverlay() {
  spinner.stop();
  document.body.removeChild(overlay);
}