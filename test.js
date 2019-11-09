

var testWest = document.querySelector('.test');
testWest.addEventListener('keyup', function(event) {
  let textBox = ['num1', 'num2', 'num3'];
  for(let words in testWest){
    let currentButton = event.target;
    let currentCard = currentButton.parentNode;
    let currentAnswer = currentCard.querySelector('.test');
currentCard.querySelector('.west').innerHTML = 'Hello There! inside words for ';
// console.log(words);
// console.log(textBox.lenght);
// for(i = 0; i < 5; i++){
//   console.log([i]);
//   document.querySelector('.west').innerHTML = 'Hello There! inside i loop ';
// }
}
});

// function callMe() {
// //alert("hello");
// testWest = [];
// let fred = testWest;
//
//     for(let words in testWest){
// //alert("hello");
//
//     document.querySelector('.west').innerHTML = 'Hello There! ';
//     document.querySelector('.west1').innerHTML = 'Hello There! west';
//      console.log("hello");
//
//
//
//       }

     //}


  // for(let i = 0; i < 10; i++) {
  //   console.log([i]);
  // }
