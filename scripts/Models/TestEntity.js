/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

class TestEntity{
    constructor(id, text){
        this.id = id;
        this.text = text;
    }

    get id (){
        return this.id;
    }

    get text(){
        return this.text;
    }
}