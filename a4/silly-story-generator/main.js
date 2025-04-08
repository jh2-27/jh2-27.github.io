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

//result() gets one random element each from insertX, insertY, insertZ and adds it to the placeholders in the storyText
//updates the html with new story

function result() {

    //newStory will be the random story after modification
    let newStory = storyText;

    //Getting randomized inserts for placeholders
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    //Adding the inserts to the placeholders in the story
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if(customName.value !== '') {
      const name = customName.value;
      //Adding custom name after verifying it exists
      newStory = newStory.replaceAll('Bob', name);
    }
  
    if(document.getElementById("uk").checked) {
      //1 pound = 0.0714286 stones
      const stones_per_pound = 0.0714286;
      const weight = `${Math.round(300*stones_per_pound)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      //Adjusting units to UK units
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
    
    //Updating story content in html
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
