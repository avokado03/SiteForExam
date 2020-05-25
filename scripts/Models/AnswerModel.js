/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import TestEntity from '/scripts/Models/TestEntity.js';
export default class Answer extends TestEntity {
    constructor(id, text, score)
    {
        super(id, text);
        this._score = score;
    }

    get score(){
        return this._score;
    }

    set score(value){
        this._score = value;
    }
}