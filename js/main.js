let question1 = document.querySelector('.question-1');
let answer1 = document.querySelector('.answer-1');

let question2 = document.querySelector('.question2');
let answer2 = document.querySelector('.answer2');

let question3 = document.querySelector('.answer3');
let answer3 = document.querySelector('.answer3');

let question4 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer3');

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

// question2.addEventListener('click', function (e) {

// })






