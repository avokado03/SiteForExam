/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

export default class TestView{
    constructor(element) {
        this._element = element;
        this._onBtnClick = null;
    }

    get element(){
        return this._element;
    }

    set element(value){
        this._element = value;
    }

    get onBtnClick(){
        return this._onBtnClick;
    }

    set onBtnClick(value){
        this._onBtnClick = value;
    }
}