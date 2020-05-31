/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

/**
 * main module of app
 */
import Utils from "/scripts/Utils/Utils.js";
import TestController from "/scripts/Controllers/TestController.js";
import TestView from "/scripts/Views/TestView.js";
import TestModel from "/scripts/Models/TestModel.js";
import ThemeController from "/scripts/Controllers/ThemeController.js";
import ThemeView from "/scripts/Views/ThemesView.js";
import {questions} from "/scripts/Models/TourQuestionsMock.js";
import {results} from "/scripts/Models/TourResultMock.js";
import {themes} from "/scripts/Models/TourThemesMock.js";

let burgerBtn = document.querySelector('.bar');
let questionBtn = document.querySelector('.travel-choice-btn');
let utils = new Utils();
let target = document.querySelector('.main-contaner-test');
target.style.display = 'none';

//init themes changing
let themeView = new ThemeView(document);
let themeModel = themes;
let themeController = new ThemeController(themeView, themeModel);
themeController.initialize();

//init of test start
questionBtn.onclick = function(e){
    e.preventDefault();
    utils.toggleDisplay(target, 'none', 'grid');
    let view = new TestView(target);
    let model = new TestModel(1,questions,results);
    let controller = new TestController(view, model);
    controller.initialize();
};

//show burger menu
burgerBtn.onclick = function(){
    let classList = burgerBtn.classList;
    let banner = document.querySelector('.main-contaner-banner');
    let menu = document.querySelector('.main-contaner-burger');
    classList.toggle('fa-bars');
    classList.toggle('fa-times');
    utils.toggleDisplay(banner, 'none', 'grid');
    utils.toggleDisplay(menu, 'flex', 'none');
};






