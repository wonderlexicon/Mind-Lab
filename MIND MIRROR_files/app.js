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
   fetch('moods.json')
   .then(response => response.json())
   .then(data => {
        console.log(data);
        //Do something with 'data'
      //  document.getElementById("myDiv").innerHTML=data.emotions;
        shuffle (data.emotions);
        document.getElementById("myDiv").innerHTML=data.emotions.slice(0,5);
   })

   function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // source https://javascript.info/task/shuffle
  
   
   
//    if (yesNum > 2) {
//     yesNum = 0;
//  } 
})


// noButton.addEventListener('click', function (e) {
//     answerText.innerHTML = 'NO';
// });

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
