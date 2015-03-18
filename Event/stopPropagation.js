var getEvent = require('./event');
/**
 * Prevents further propagation of the event
 *
 * @see {@link https://msdn.microsoft.com/en-us/library/ie/ms533545(v=vs.85).aspx|MSDN#Events.cancelBubble}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation|MDN#Event.stopPropagation}
 * @param {Event} event The event object
 * @returns {EventTarget} The event target
 */
module.exports = function(event) {
	event = getEvent(event);
	(event.stopPropagation) ? event.stopPropagation() : event.cancelBubble = true;
};
