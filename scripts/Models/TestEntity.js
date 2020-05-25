/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

export default class TestEntity{
    constructor(id, text){
        this._id = id;
        this._text = text;
    }

    get id (){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get text(){
        return this._text;
    }

    set text(value){
        this._text = value;
    }
}
