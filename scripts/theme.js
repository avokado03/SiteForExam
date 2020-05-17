
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
let themeBtn = document.querySelector('.theme-btn');

ThemeChange();

// theme applying
function ThemeChange(){
    if (contanerClasses.contains('day'))
        GoToDay();
    if (contanerClasses.contains('night'))
        GoToNight();
    ThemeTextChange();
}

function ThemeTextChange(){
    hotToursRef.first.textContent = hotTours.first;
    hotToursRef.second.textContent = hotTours.second;
    hotToursRef.third.textContent = hotTours.third;
    hotToursRef.fourth.textContent = hotTours.fourth;
    hotToursRef.fifth.textContent = hotTours.fifth;
}

function GoToDay(){
    hotTours.first = "Барбадос";
    hotTours.second ='Куба'; 
    hotTours.third = 'Гаваи';
    hotTours.fourth = 'Турция';
    hotTours.fifth = 'Новая Зеландия';
}

function GoToNight(){
    hotTours.first = "Нидерланды";
    hotTours.second ='Исландия'; 
    hotTours.third = 'Дания';
    hotTours.fourth = 'Шотландия';
    hotTours.fifth = 'Финляндия';
}

themeBtn.onclick = function(){
    contanerClasses.toggle('day');
    contanerClasses.toggle('night');
    ThemeChange();
};


