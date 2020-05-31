/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

/**
 * Mocks for questions
 */
import Question from "/scripts/Models/QuestionModel.js";
import Answer from "/scripts/Models/AnswerModel.js";

export let questions = [
    new Question(1, 'Какой климат вы предпочитаете?','/img/season.jpg', [
        new Answer(1, 'Жаркий', 1),
        new Answer(2, 'Холодный', 2),
        new Answer(3, 'Умеренный', 3)
    ]),
    new Question(2, 'Вы любите посещать...', '/img/kreml.jpg', [
        new Answer(4, 'рестораны и клубы', 1),
        new Answer(5, 'музеи, памятники природы', 2),
        new Answer(6, 'городские достопримечательности', 3)
    ]),
    new Question(3, 'Вы чаще путешествуете...','/img/tour.jpg', [
        new Answer(7, 'с семьей', 1),
        new Answer(8, 'в гордом одиночестве', 2),
        new Answer(9, 'с друзьями и/или любимым человеком', 3)
    ]),
    new Question(4, 'Какой из этих напитков вы бы выбрали?','/img/drink.jpg', [
        new Answer(10, 'Коктейль с тропическими фруктами', 1),
        new Answer(11, 'Горячий травятой чай', 2),
        new Answer(12, 'Свежесваренный кофе', 3)
    ]),
    new Question(5, 'Какую одежду вы обязательно возьмете в поездку?', '/img/dress.jpg', [
        new Answer(13, 'Возьму все самое нарядное', 1),
        new Answer(14, 'Что-то спортивное, в чем будет удобно', 2),
        new Answer(15, 'Несколько комплектов повседневной одежды', 3)
    ])
];