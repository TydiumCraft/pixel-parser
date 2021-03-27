const Location = require('./location')

module.exports = class LocationHolder {
	constructor(location) {
		/** This object's location */
		this.location = new Location(location.location || location)
		/** Convenience field equivalent to `this.location.world` */
		this.world = this.location.world
	}
	toString() {
		return `LocationHolder at ${this.location.toString()}`
	}
	/**
	 * Returns the distance between two Locations or LocationHolders
	 * @param {Location|LocationHolder} other 
	 * @returns {number}
	 */
	getDistance(other) {
		if (other instanceof Location) {
			return this.location.getDistance(other)
		} else if (other instanceof LocationHolder) {
			return this.location.getDistance(other.location)
		} else {
			console.warn('Invalid "other" argument')
			return Number.MAX_SAFE_INTEGER
		}
	}
}