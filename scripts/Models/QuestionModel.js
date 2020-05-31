/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import TestEntity from "/scripts/Models/TestEntity.js";

/**
 * question's model
 * picture - image of current question
 * answers - answers of current question
 */
export default class Question extends TestEntity{
    constructor (id, text, picture, answers){
        super(id, text);
        this._picture = picture;
        this._answers = answers;
    }

    get picture(){
        return this._picture;
    }

    set picture(value){
        this._picture = value;
    }

    get answers(){
        return this._answers;
    }

    set answers(value){
        this._answers = value;
    }
}
