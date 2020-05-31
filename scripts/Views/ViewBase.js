/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

/**
 * Basic class for other views
 * element - DOM element for view representation
 */
export default class ViewBase{
    constructor(element) {
        this._element = element;
        this._onBtnClick = null;
        this._elementStructure = this.parseElement();
    }

    get element(){
        return this._element;
    }

    set element(value){
        this._element = value;
    }

    //basic click event from controller
    get onBtnClick(){
        return this._onBtnClick;
    }

    set onBtnClick(value){
        this._onBtnClick = value;
    }

    // for custom implementation
    parseElement(){}
}