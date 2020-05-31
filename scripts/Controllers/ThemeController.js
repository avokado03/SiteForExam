/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import ControllerBase from '/scripts/Controllers/ControllerBase.js';

/*
 * controller for themes changing
 */
export default class ThemeController extends ControllerBase{
    constructor(view, model){
        super(view,model);
    }

    initialize(){
        this.view.onBtnClick = this.themeBtnClick.bind(this);
        this.view.initializeTheme(this.model);
    }

    themeBtnClick(e){
        if(e!=undefined)
            e.preventDefault();
        this.view.applyTheme(this.model);
    }
}