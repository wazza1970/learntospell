let cards = document.getElementsByClassName('card');

for(let cardIndex in cards) {

  let button = cards[cardIndex].querySelector('.show-button');
  button.addEventListener('click', function(event){
    let currentButton = event.target;
    let currentCard = currentButton.parentNode;
    let currentAnswer = currentCard.querySelector('.answer');
    if(currentButton.innerHTML == 'Show'){
        currentAnswer.style.display = 'block';
        currentButton.innerHTML = "Hide";
      } else if(currentButton.innerHTML == 'Hide') {
        currentAnswer.style.display = 'none';
        currentButton.innerHTML = "Show";
      }
  });


  // let answers = document.getElementsByClassName('text-answer');

  // textInput.addEventListener('change', function(event) {
  //   console.log(textInput);
  // });

}

function spellWord (val) {
  let textInput = document.querySelector('.text-answer').value;
console.log("textInput " + textInput)
  // let answer1 = document.querySelector('.answer'),
  // textContent = answer1.textContent;



  for(let i =0; i < textInput.lentgh; i++){

    document.addEventListener('keyup', function(){
    document.querySelector('.word').innerHTML = " you wrote: " + val;
      });


    console.log("i is: " + i + ' ' + val);


  }




}


// console.log(answer1);
 //let textContent = node.textContent //document.querySelector('.answer').innerHTML;
// let pope = document.addEventListener('input', function(){
//   console.log(pope);
// });

 //console.log(textInput);
 // document.querySelector('.show-button').addEventListener('click', function(event){
 //
 //   if(textInput == answer1) {
 //     document.querySelector('.word').innerHTML ="Well done " + textInput;
 //   } else {
 //     document.querySelector('.word').innerHTML ="Try again " + textInput;
 //   }
 // });

//}
