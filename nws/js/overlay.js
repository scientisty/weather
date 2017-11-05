/*
 * Implements a loading overlay using spin.js
 * Unless there is another clever solution, requires spin.js be included in html <script>.
 */


var overlay = {
  /*
   * Creates overlay and starts spinner
   */
  startOverlay: function() {
    var opts = {
      scale: 2,
      color: '#fff',
      opacity: 0,
      trail: 100
    };
    this.spinner = new Spinner(opts).spin();

    this.overlay = document.createElement('div');
    this.overlay.id = 'overlay';
    this.overlay.style.width = '100vw';
    this.overlay.style.height = '100vh';
    this.overlay.style.position = 'fixed';
    this.overlay.style.top = '0';

    this.overlay.style.backgroundColor = 'rgba(0, 0, 0, .75)';

    this.overlay.appendChild(this.spinner.el);
    document.body.appendChild(this.overlay);
  },


  /*
   * Stops spinner and removes overlay
   */
  stopOverlay: function() {
    this.spinner.stop();
    document.body.removeChild(this.overlay);
  }
}