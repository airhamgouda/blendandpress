'use strict';
/*global $ employee snippets */


const compiler = (function () {

  const render = function () {
    $('.employee-list').remove();
    $('.employee-box').append(employee.finalList);
  };

  setInterval(render(), 5000);

  console.log(employee);

  return {
    render

  };

})();