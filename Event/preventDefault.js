/**
 * Cancels the event if it is cancelable, without stopping further propagation of the event.
 *
 * @see {@link https://msdn.microsoft.com/en-us/library/ie/ff975460(v=vs.85).aspx|MSDN#preventDefault}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault|MDN#preventDefault}
 * @param event The event object
 */
module.exports = function(event) {
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
};
