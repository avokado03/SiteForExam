/*jshint esversion: 6 */
/* jshint browser: true */
/* jshint -W097 */
/**
 * basic methods for application
 */
export default class Utils{

    //bind event to many targets
    bindEvent(callback, event, targets)
    {
        targets.forEach(target => {
            target.addEventListener(event, callback);
        });
    }
    
    //toggle display attribute
    toggleDisplay(element, from, to){
        element.style.display = element.style.display === from ? to : from;    
    }
}