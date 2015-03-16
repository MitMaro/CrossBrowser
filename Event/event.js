/**
 * Get the event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/target|MDN#Event.target}
 * @param {Event} event The potential event object (undefined on IE<9)
 * @returns {Event} The event
 */
module.exports = function(event) {
	return event || window.event;
};	
