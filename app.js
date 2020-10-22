
const circumstances = [
  "I see the headlines in the newspaper",
  "my alarm goes off in the morning",
  "I have a birthday",
  "it's raining"
];
//how do i make a new sentence for each circumstance show up w a random emotion?""
// I feel put in json options - based on the mood the p5 changes color 
window.addEventListener('load', function () {

  console.log('page is loaded');

  //Load the json data file 
  let myEmotionsSet;
  fetch('moods.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //Do something with 'data'
      //  document.getElementById("myDiv").innerHTML=data.emotions;
      shuffle(data.emotions);
      myEmotionsSet = data.emotions;
      document.getElementById("random-feeling-input").value = data.emotions.slice(0, 1);
    })

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // source https://javascript.info/task/shuffle


  let randomButton = document.getElementById("random-button")
  console.log("button");
  randomButton.addEventListener('click', function (e) {
    console.log("clickedRandom");
    shuffle(myEmotionsSet);
    document.getElementById("random-feeling-input").value = myEmotionsSet.slice(0, 1);


  });

})

function BackToTop() {
  console.log("i clicked back to top");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function yesFunction() {
  document.getElementById("yesClick").innerHTML =
    "Great! You have just reinforced a positive pattern and strenthened your understanding of a causal connection that you can apply to other situations in your life! If you're ready for a bigger challenge, explore an unpleasant thought or go deeper into your exploration of a random emotion.";
  // if (document.getElementById("yesClick").innerHTML.length === 0) {
  //     document.getElementById("yesClick").innerHTML =
  //         "Great! You have just reinforced a positive pattern and strenthened your understanding of a causal connection that you can apply to other situations in your life! If you're ready for a bigger challenge, explore an unpleasant thought or go deeper into your exploration of a random emotion.";
  // } else {
  //     document.getElementById("yesClick").
  //     innerHTML = "";
  // }
}

function noFunction() {
  document.getElementById("yesClick").innerHTML =
    "Great! You just discovered valuable information about what does not work for you. Try playing again, perhaps exploring a different thought/feeling/action combination. Before you know it you'll see for yourself the incredible results conscious thinking can create!";
  // if (document.getElementById("noClick").innerHTML.length === 0) {
  //     document.getElementById("noClick").innerHTML =
  //         "Great! You just discovered valuable information about what does not work for you. Try playing again, perhaps exploring a different thought/feeling/action combination. Before you know it you'll see for yourself the incredible results conscious thinking can create!";
  // } else {
  //     document.getElementById("noClick").innerHTML = "";
  // }
}



//    if (yesNum > 2) {
//     yesNum = 0;
//  } 
// let yesAnswers = ["great", "super", "amazing"];
// let yesNum = 0;

//    .catch(error => {
//        console.log("Error!!! : " + error);
//    })

// })
// function setup(){
//     console.log('Setup!');
//     createCanvas (800,800);
//     background (100, 300, 25);
// }

//     function draw(){
//     script

function replaceUserResultsText() {
  document.getElementById("userResults").innerHTML = document.getElementById(
      "results-input")
    .value;
}

function onResultButtonClicked() {
  revealReviewSection();
  replaceUserResultsText();
}

function revealReviewSection() {
  if (allSectionsFilled()) {
    document.getElementById("the-big-picture").removeAttribute("hidden");
  }


}

function allSectionsFilled() {
  return (
    document.getElementById("userResults").innerHTML !== "" &&
    document.getElementById("userActions").innerHTML !== "" &&
    document.getElementById("userFeel").innerHTML !== "" &&
    document.getElementById("userThought").innerHTML !== ""
  );
}

// THOUGHT
function replaceUserThoughtText() {
  document.getElementById("userThought").innerHTML = document.getElementById(
      "thought-input")
    .value;
}

function onThoughtButtonClicked() {
  replaceUserThoughtText();

} 
function writeToThoughtsDb(){
//TO BE CONTINUED WRITING TO NEDB//
}
//                 
function replaceUserThoughtWithDropdown() {
  console.log('dropdown')
  let thoughtList = document.getElementById(
    "thought-list");
  document.getElementById("userThought").innerHTML = (
    thoughtList.options[thoughtList.selectedIndex].text);

}

// FEEL
function showRandomContainerIfDropdownSelected() {
  console.log("showRandomFunction")
  if (document.getElementById("feelingsList").value === "Random") {
    document.getElementById("random-container").removeAttribute("hidden");
  } else {
    document.getElementById("random-container").hidden = true;
  }
}

function onFeelingsDropdownChanged() {
  let feelList = document.getElementById(
    "feelingsList");
  // if (feelList.value == "Random"){
    showRandomContainerIfDropdownSelected();
  // } 
  if (feelList.value !== "Random"){
     document.getElementById("userFeel").innerHTML =
     (
      feelList.options[feelList.selectedIndex].text);
  }
}