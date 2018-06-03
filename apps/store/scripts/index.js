'use strict';
/*global compiler events $*/
$(document).ready(function () {
  $('body').append(
    `
        <header class="w3-theme-d3">
        <h1>blend.press</h1>
        </header>

        <div class="app-container w3-theme-d1">
        
        </div>

        <footer class="w3-theme-d3"><h1>Footer</h1></footer>
      `);
  events.link();
  compiler.render();
});