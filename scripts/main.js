/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
import Utils from "/scripts/Utils/Utils.js";
import TestController from "/scripts/Controllers/TestController.js";
import TestView from "/scripts/Views/TestView.js";
import TestModel from "/scripts/Models/TestModel.js";
import {questions} from "/scripts/Models/TourQuestionsMock.js";
import {results} from "/scripts/Models/TourResultMock.js";

let hotTours = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: ''
};
let hotToursRef = {
    first: document.querySelector('.first'),
    second: document.querySelector('.second'),
    third: document.querySelector('.third'),
    fourth: document.querySelector('.fourth'),
    fifth: document.querySelector('.fifth')
};


let contanerClasses = document.querySelector('.contaner').classList;
let themeBtns = document.querySelectorAll('.theme-btn');
let burgerBtn = document.querySelector('.bar');
let questionBtn = document.querySelector('.travel-choice-btn');
let utils = new Utils();
let target = document.querySelector('.main-contaner-test');
target.style.display = 'none';

themeChange();
utils.bindEvent(themeBtnClick, 'click', themeBtns);


/* function for binding an event
*  with all of needed elements
*  with same class e.g.
*/

questionBtn.onclick = function(e){
    e.preventDefault();
    utils.toggleDisplay(target, 'none', 'grid');
    let view = new TestView(target);
    let model = new TestModel(1,questions,results);
    let controller = new TestController(view, model);
    controller.initialize();
};



// theme applying
function themeChange(){
    if (contanerClasses.contains('day'))
        goToDay();
    if (contanerClasses.contains('night'))
        goToNight();
    themeTextChange();
}

/*Theme block start*/
/*TODO: to separate document*/
function themeTextChange(){
    hotToursRef.first.textContent = hotTours.first;
    hotToursRef.second.textContent = hotTours.second;
    hotToursRef.third.textContent = hotTours.third;
    hotToursRef.fourth.textContent = hotTours.fourth;
    hotToursRef.fifth.textContent = hotTours.fifth;
}

function goToDay(){
    hotTours.first = "Барбадос";
    hotTours.second ='Куба'; 
    hotTours.third = 'Гаваи';
    hotTours.fourth = 'Турция';
    hotTours.fifth = 'Новая Зеландия';
}

function goToNight(){
    hotTours.first = "Нидерланды";
    hotTours.second ='Исландия'; 
    hotTours.third = 'Дания';
    hotTours.fourth = 'Шотландия';
    hotTours.fifth = 'Финляндия';
}

function themeBtnClick(){
    contanerClasses.toggle('day');
    contanerClasses.toggle('night');
    themeChange();
}
/*Theme block end*/

burgerBtn.onclick = function(){
    let classList = burgerBtn.classList;
    let banner = document.querySelector('.main-contaner-banner');
    let menu = document.querySelector('.main-contaner-burger');
    classList.toggle('fa-bars');
    classList.toggle('fa-times');
    utils.toggleDisplay(banner, 'none', 'grid');
    utils.toggleDisplay(menu, 'flex', 'none');
};






