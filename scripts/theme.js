/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
'use strict';

//objects for different tours names 
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


themeChange();
bindEvent(themeBtnClick, 'click', themeBtns);


/* function for binding an event
*  with all of needed elements
*  with same class e.g.
*/
function bindEvent(callback, event, targets)
{
    targets.forEach(target => {
        target.addEventListener(event, callback);
    });
}

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
    toggleDisplay(banner, 'none', 'grid');
    toggleDisplay(menu, 'flex', 'none');
};

function toggleDisplay(element, from, to){
    element.style.display = element.style.display === from ? to : from;    
}



