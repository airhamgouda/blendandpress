'use strict';
/*global   */


const snippets = (function () {

  let index = 0;


  const slides = [
    '<div class="slide w3-animate-fading"><h1>Hello</h1></div>',

    `
    <script>
    function nextSlide() {

    console.log('click');
    snippets.index++;

    compiler.render();

  }
    </script>
    <div class="slide w3-animate-opacity">
    <h1>How old are you?</h1>
    <span><select name="age">
      <option value = "1">Under 18</option >
      <option value="2">18+</option>
    </select></span>
    <input class="w3-button" onclick="nextSlide()" type="submit" value="submit">
    </div>`,

    `
    <script>
    function nextSlide() {

    console.log('click');
    snippets.index++;

    compiler.render();

  }
    </script>
    <div class="slide w3-animate-opacity">
    <h1>What time do you wake up?</h1>
    <span><select name="time">
      <option value = "1" >Before 6am</option >
      <option value="2">6am-12pm</option>
      <option value="3">12pm-8pm</option>
      <option value="4">After 8pm</option>
    </select></span>
    <input class="w3-button" onclick="nextSlide()" type="submit" value="submit">
    </div>`,

    `
    <script>
    function nextSlide() {

    console.log('click');
    snippets.index++;

    compiler.render();

  }
    </script>
    <div class="slide w3-animate-opacity">
    <h1>Any dietary preferences?</h1>
    <span><select name="diet">
      <option value = "1" >Vegan</option >
      <option value="2">Other</option> 
    </select></span>
    <input class="w3-button" onclick="nextSlide()" type="submit" value="submit">
    </div>`,

    `
    <script>
    function nextSlide() {

    console.log('click');
    snippets.index++;

    compiler.render();

  }
    </script>
    <div class="slide w3-animate-opacity">
    <h1>What is the purpose of this cleanse?</h1>
    <span><select name="cleanse">
      <option value = "1" >Weight Loss</option >
      <option value="2">Stress Relief</option> 
      <option value="3">Muscle Building</option> 
    </select></span>
    <input class="w3-button" onclick="nextSlide()" type="submit" value="submit">
    </div>`,

    `<div class="shopping-cart w3-animate-opacity">
    <h1>Thank you! Here is what I think will work for you :) </h1>
    <div class="w3-theme-l5 subtotal">
    <ul>
    <li><h2>No Sweat Reset!</h2></li>
    <li><h3>From what you chose, we think your first cleanse should be start out with our gentle yet effective combination of shots, juices, and a smoothie!</h3></li>
    <li><h4><a href="#">Click here to see your schedule!</a></h4></li>
    <li><a href="#">Pay now: </a><h1>74.99</h1></li>
    </ul>
    </div>
    </div>`
  ];

  let current = function () {
    return slides[snippets.index];
  };

  return {
    current,
    index,
    slides
  };

})();