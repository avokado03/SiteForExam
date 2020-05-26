/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import ControllerBase from '/scripts/Controllers/ControllerBase.js';
export default class TestController extends ControllerBase{

    constructor(view, model){
        super(view,model);
        this._currentQuestion = 0;
        this._result = 0;
    }

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