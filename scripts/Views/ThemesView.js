/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import Utils from '/scripts/Utils/Utils.js';
import ViewBase from '/scripts/Views/ViewBase.js';

/**
 * View for themes changing
 */
export default class ThemesView extends ViewBase {
    constructor(element){
        super(element);
    }

    parseElement(){
        let elementStructure = {
            contaner: this.element.querySelector('.contaner'),
            first: this.element.querySelector('.first'),
            second: this.element.querySelector('.second'),
            third: this.element.querySelector('.third'),
            fourth: this.element.querySelector('.fourth'),
            fifth: this.element.querySelector('.fifth'),
            themeBtns:  this.element.querySelectorAll('.theme-btn')
        };
        return elementStructure;
    }

    initializeTheme(themeModels){
        this.applyTheme(themeModels);
        let utils = new Utils();
        utils.bindEvent(this.onBtnClick, 'click', this._elementStructure.themeBtns);
    }

    //switches the theme depending on the container class
    applyTheme(themesModels){
        let contanerClasses = this._elementStructure.contaner.classList;
        contanerClasses.toggle('night');
        contanerClasses.toggle('day');
        if(contanerClasses.contains('day'))
            this.renderHotTours(themesModels.day);
        if(contanerClasses.contains('night'))
            this.renderHotTours(themesModels.night);
    }

    renderHotTours(themeModel){
        this._elementStructure.first.textContent = themeModel.first;
        this._elementStructure.second.textContent = themeModel.second;
        this._elementStructure.third.textContent = themeModel.third;
        this._elementStructure.fourth.textContent = themeModel.fourth;
        this._elementStructure.fifth.textContent = themeModel.fifth;
    }
}