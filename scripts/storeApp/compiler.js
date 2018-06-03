'use strict';
/*global $ snippets */


const compiler = (function () {

  const render = function () {
    $('.slide').remove();
    $('.app-container').append(snippets.current);
    //snippets.index++;
  };

  return {
    render

  };

})();