/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

class Answer {
    constructor(id, text, score)
    {
        super(id, text);
        this.score = score;
    }

    get score(){
        return this.score;
    }

    set score(value){
        this.score = value;
    }
}