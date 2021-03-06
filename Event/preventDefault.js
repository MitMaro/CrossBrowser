var getEvent = require('./event');
/**
 * Cancels the event if it is cancelable, without stopping further propagation of the event.
 *
 * @see {@link https://msdn.microsoft.com/en-us/library/ie/ms534372(v=vs.85).aspx|MSDN#Event.returnValue}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault|MDN#Event.preventDefault}
 * @param {Event} event The event object
 */
module.exports = function(event) {
	event = getEvent(event);
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
};
