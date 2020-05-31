/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

/**
 * full model of tour test
 */
export default class Test{
    constructor(id, questions, results){
        this._id = id;
        this._questions = questions;
        this._results = results;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get questions(){
        return this._questions;
    }

    set questions(value){
        this._questions = value;
    }

    get results(){
        return this._results;
    }

    set results(value){
        this._results = value;
    }

}