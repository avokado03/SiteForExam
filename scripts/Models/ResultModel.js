/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
class Result extends TestEntity{
    constructor(id, text, name, picturePath, from, to){
        super(id,text);
        this.name = name;
        this.picturePath = picturePath;
        this.from = from;
        this.to = to;
    }

    get name(){
        return this.name;
    }

    get picturePath(){
        return this.picturePath;
    }

    get from(){
        return this.from;
    }

    get to(){
        return this.to;
    }
}