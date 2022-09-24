let question1 = document.querySelector('.question-1');
let answer1 = document.querySelector('.answer-1');

let question2 = document.querySelector('.question-2');
let answer2 = document.querySelector('.answer2');

let question3 = document.querySelector('.question-3');
let answer3 = document.querySelector('.answer-3');

let question4 = document.querySelector('.question-4');
let answer4 = document.querySelector('.answer-4');

let rules = document.getElementsByClassName('rule');



question1.addEventListener('click', function (e) {
    answer1.classList.toggle('inactive');
    let marketPicture = document.createElement('img');
    marketPicture.classList = 'market-map';
    marketPicture.src = './images/market map.jpg';
    answer1.textContent = "The market is lotcated in the desert ";
    answer1.append(marketPicture);

    // e.stopPropagation()
});


question2.addEventListener('click', function (e) {
    // e.stopPropagation()
    answer2.classList.toggle('inactive');
    answer2.textContent = "You can buy All kind of material, weapons and kits."


})


question3.addEventListener('click', function (e) {
    answer3.classList.toggle('inactive');
    answer3.textContent = "At the appropriate seller you can sell stone, wood,coal, iron, flask with water...etc"
})


question4.addEventListener('click', function (e) {
    answer4.classList.toggle('inactive');
    answer4.textContent = "Yes, palyers can set up their own shop."
})




