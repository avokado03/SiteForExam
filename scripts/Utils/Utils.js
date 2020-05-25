/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
export default class Utils{
    bindEvent(callback, event, targets)
    {
        targets.forEach(target => {
            target.addEventListener(event, callback);
        });
    }
    
    toggleDisplay(element, from, to){
        element.style.display = element.style.display === from ? to : from;    
    }
}