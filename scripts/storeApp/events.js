'use strict';
/*global $ snippets compiler*/


const events = (function () {

  function startUp() {
    if (snippets.index === 0) {
      setTimeout(function () {
        snippets.index++;
        compiler.render();
      }, 10000);
    }
  }



  function link() {
    startUp();


  }

  return {

    link,
  };

})();