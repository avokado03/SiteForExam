/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
/**
 * theme's model
 * first-fifth - sequence number of hot tour 
 */
export default class Theme{
    constructor(first,second,third, fourth, fifth){
        this._first = first;
        this._second = second;
        this._third = third;
        this._fourth = fourth;
        this._fifth = fifth;
    }

    get first(){
        return this._first;
    }

    set first(value){
        this._first = value;
    }

    get second(){
        return this._second;
    }

    set second(value){
        this._second = value;
    }

    get third(){
        return this._third;
    }

    set third(value){
        this._third = value;
    }

    get fourth(){
        return this._fourth;
    }

    set fourth(value){
        this._fourth = value;
    }

    get fifth(){
        return this._fifth;
    }

    set fifth(value){
        this._fifth = value;
    }
}