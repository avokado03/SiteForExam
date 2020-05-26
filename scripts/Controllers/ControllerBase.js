/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

export default class ControllerBase{

    constructor(view, model){
        this._view = view;
        this._model = model;
    }

    get view(){
        return this._view;
    }

    set view(value){
        this._view = value;
    }

    get model(){
        return this._model;
    }

    set model(value){
        this._model = value;
    }

    initialize(){}
}