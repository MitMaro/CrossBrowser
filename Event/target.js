var getEvent = require('./event');
/**
 * Gets the target of the event
 *
 * @see {@link https://msdn.microsoft.com/en-us/library/ie/ms534638(v=vs.85).aspx|MSDN#Events.srcElement}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/target|MDN#Event.target}
 * @param {Event} event The event object
 * @returns {EventTarget} The event target
 */
module.exports = function(event) {
	event = getEvent(event);
	return event.target || event.srcElement;
};
