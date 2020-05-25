/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

export default class TestView{
    constructor(element) {
        this._element = element;
        this._onBtnClick = null;
        this._elementStructure = this.parseElement();
    }

    get element(){
        return this._element;
    }

    set element(value){
        this._element = value;
    }

    get onBtnClick(){
        return this._onBtnClick;
    }

    set onBtnClick(value){
        this._onBtnClick = value;
    }

    parseElement (){
        let question = this.element.querySelector('.main-contaner-test-question');
        let elements = {
            picture: this.element.querySelector('.main-contaner-test-picture'),
            question: question,
            answers: question.querySelectorAll('.answer'),
            btn: this.element.querySelector('.btn'),
            result: question.querySelector('.result'),
            questionText: question.querySelector('.question-text')
        };
        return elements;
    }

    initializeTest(){
        this._elementStructure.btn.querySelector('.answer-btn').innerHTML = 'Ответить';
        this._elementStructure.questionText.style.display = 'block';
        this._elementStructure.answers.forEach(answer => {
            answer.style.display = 'block';
        });
        this._elementStructure.result.style.display = 'none';
        this._elementStructure.btn.addEventListener('click', this.onBtnClick);
    }

    renderQuestion (questionModel) {
        let img = `url('${questionModel.picture}')`;
        this._elementStructure.picture.style.backgroundImage = img;
        this._elementStructure.questionText.textContent = questionModel.text;
        this._renderAnswer(this._elementStructure.answers, questionModel.answers);
    }

    renderResult(resultModel){
        this._elementStructure.questionText.style.display = 'none';
        this._elementStructure.answers.forEach(answer => {
            answer.style.display = 'none';
        });
        let result = this._elementStructure.result;
        let picture = `url('${resultModel.picturePath}')`;
        let btn = this._elementStructure.btn;
        this._elementStructure.picture.style.backgroundImage = picture; 
        result.querySelector('.test-header').textContent = resultModel.name;
        result.querySelector('.test-result').textContent = resultModel.text;
        btn.querySelector('.answer-btn').innerHTML = 'Закончить';
        console.log(btn.onclick);
        btn.addEventListener('click', this._onBtnClick);      
        console.log(btn.onclick);
        result.style.display = 'flex';
    }

    _renderAnswer(answers, answerModels){
        for (let i = 0; i < answers.length; i++) {
            const answer  = answers[i];
            const answerModel = answerModels[i];
            answer.getElementsByTagName('input')[0].value = answerModel.score.toString();
            answer.getElementsByTagName('label')[0].innerHTML = answerModel.text;
        }
    }

    unbindBtnClick(){
        this._elementStructure.btn.removeEventListener('click', this._onBtnClick);
    }

    closeTest(){
        this.unbindBtnClick();
        this.element.style.display = 'none';
    }
}
