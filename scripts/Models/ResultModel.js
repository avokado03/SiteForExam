/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
import TestEntity from '/scripts/Models/TestEntity.js';
/**
 * result's model
 * name - header of result
 * picturePath - path to img of current result
 * from, to - range of scores 
 */
export default class Result extends TestEntity{
    constructor(id, text, name, picturePath, from, to){
        super(id,text);
        this._name = name;
        this._picturePath = picturePath;
        this._from = from;
        this._to = to;
    }

    get name(){
        return this._name;
    }

    get picturePath(){
        return this._picturePath;
    }

    get from(){
        return this._from;
    }

    get to(){
        return this._to;
    }
}