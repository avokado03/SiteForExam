/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

export default class TestController{

    constructor(view, model){
        this._view = view;
        this._model = model;
        this._currentQuestion = 0;
        this._result = 0;
    }

    get view(){
        return this._view;
    }

    set view(value){
        this._view = value;
    }

    get model(){
        return this._model;
    }

    set model(value){
        this._model = value;
    }

    //todo: get/set

    initialize(){
        this.bindEvent(this.nextQuestion);
        this.view.initializeTest();
        this.nextQuestion();
    }

    nextQuestion(e){
        if(e!=undefined)
            e.preventDefault();
        let answers = document.getElementsByName('answer');
        this._checkAnswer(answers);
        if (this.model.questions.length > this._currentQuestion){
            this.view.renderQuestion(this.model.questions[this._currentQuestion]);
            ++this._currentQuestion;
        }
        else{
            this.bindEvent(this.endOfTest);
            this.getResult();        
        }
    }

    _checkAnswer(answers){
        answers.forEach(answer => {
            if(answer.checked){
                this._result+=Number(answer.value);
                answers[0].checked = true;
            }
        });
    }

    getResult(){
        let results = this.model.results;
        //
        results.forEach(result => {
            if (this._result>=result.from && this._result<=result.to){
                this.view.renderResult(result);
            }
        });
    }

    endOfTest(e){
        e.preventDefault();
        this.view.closeTest();
    }

    bindEvent(event){
        this.view.unbindBtnClick();            
        this.view.onBtnClick = event.bind(this);
    }
}