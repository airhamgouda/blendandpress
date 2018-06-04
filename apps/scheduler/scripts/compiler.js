'use strict';
/*global $ snippets */


const compiler = (function () {

    const render = function () {
        $('.employee-list').remove();
        $('.employee-box').append(employee.finalList);
        
    };

    return {
        render

    };

})();