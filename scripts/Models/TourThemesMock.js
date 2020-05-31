/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */

import Theme from '/scripts/Models/ThemeModel.js';
import DayNightThemes from '/scripts/Models/DayNightThemesModel.js';
/**
 * Mocks for themes
 */
let day = new Theme('Барбадос', 'Куба', 'Гаваи', 'Турция', 'Новая Зеландия');
let night = new Theme('Нидерланды', 'Исландия', 'Дания', 'Шотландия', 'Финляндия');
export let themes = new DayNightThemes(day, night);