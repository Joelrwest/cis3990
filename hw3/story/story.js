// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const rawStory = "It was :inserttemp: outside, so :insertvillain: went for a walk. When they got to :insertlocation:, they stared in horror for a few moments, then :insertoutcome:. :insertname: saw the whole thing, but was not surprised — :insertvillain: weighs :insertweight:, and it was a hot day.";

const villains = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
]

const locations = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
]

const outcomes = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  const name = (customName.value !== '') ? customName.value : "Bob";

  var weight;
  var temperature;
  if (document.getElementById("uk").checked) {
    weight = "136 kilograms";
    temperature =  "34 degrees celsius";
  } else {
    weight = "300 pounds";
    temperature = "94 degrees fahrenheit";
  }

  const villain = randomValueFromArray(villains);
  const location = randomValueFromArray(locations);
  const outcome = randomValueFromArray(outcomes);

  story.textContent = rawStory.replaceAll(":insertvillain:", villain)
                              .replaceAll(":insertlocation:", location)
                              .replaceAll(":insertoutcome:", outcome)
                              .replaceAll(":insertname:", name)
                              .replaceAll(":inserttemp:", temperature)
                              .replaceAll(":insertweight:", weight);
  story.style.visibility = 'visible';
}
