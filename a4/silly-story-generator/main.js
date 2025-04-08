//Name: Javidan Hasanzade
//File: main.js
//Date: March 18, 2025
//Silly story generator script file

//Getting HTML elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//randomValueFromArray(array) returns a random elementfrom array.
//Uses Math.random() and Math.floor() to generate a random number
//between 0 and array length.
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

//Story strings
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//Adding event listener to the randomize button
//runs result() when button is clicked
randomize.addEventListener('click', result);

