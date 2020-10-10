
//  * @name Slider
//  * @description Move the sliders to control the R, G, B values of the background.
//  */
let rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(800, 160);
  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(800, 3540);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(800, 3520);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(800, 3500);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
}

const circumstances = [
    "I see the headlines in the newspaper",
     "my alarm goes off in the morning",
      "I have a birthday",
       "it's raining"];
       //how do i make a new sentence for each circumstance show up w a random emotion?""
// I feel put in json options - based on the mood the p5 changes color 
window.addEventListener('load', function() {
    
    console.log('page is loaded');

   //Load the json data file 
   let myEmotionsSet; 
   fetch('moods.json')
   .then(response => response.json())
   .then(data => {
        console.log(data);
        //Do something with 'data'
      //  document.getElementById("myDiv").innerHTML=data.emotions;
        shuffle (data.emotions);
        myEmotionsSet=data.emotions;
        document.getElementById("feeling-input").value=data.emotions.slice(0,1);
   })

   function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // source https://javascript.info/task/shuffle
  
   
  let randomButton = document.getElementById("random-button")
  randomButton.addEventListener('click', function (e) {
      console.log ("clickedRandom");
      shuffle (myEmotionsSet);
      document.getElementById("feeling-input").value=myEmotionsSet.slice(0,1);

  });
//    if (yesNum > 2) {
//     yesNum = 0;
//  } 

})




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
