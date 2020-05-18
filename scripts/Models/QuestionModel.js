/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

class Question extends TestEntity{
    constructor (id, text, answers){
        super(id, text);
        this.answers = answers;
    }

    get answers(){
        return this.answers;
    }

    set answers(value){
        this.answers = value;
    }
}