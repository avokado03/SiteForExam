/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

/**
 * Model of day and night models
 */
export default class DayNightThemes{
    constructor(day, night){
        this._day = day;
        this._night = night;
    }

    get day(){
        return this._day;
    }

    set day(value){
        this._day = value;
    }

    get night(){
        return this._night;
    }

    set night(value){
        this._night = value;
    }
}