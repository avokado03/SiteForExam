/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import Result from "/scripts/Models/ResultModel.js";
/**
 * Mocks for results
 */
export let results = [
    new Result(1, 'Вероятно, вы очарованы южным колоритом с его жаркой погодой, пляжами и экзотической едой.', 
        'Барбадос', '/img/night/first.jpg', 5, 7 ),
    new Result(2, 'Вам по душе холодные страны с их неповторимой культурой и природой севера',
        'Иcландия','/img/night/second.jpg', 8, 12),
    new Result(3, 'Вероятно, вам будет интересно посетить страны Европы, увидеть своими глазами знаменитые достопримечательности',
        'Дания', '/img/night/third.jpg', 13, 15)
];