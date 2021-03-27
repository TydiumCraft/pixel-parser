const fs = require('fs')
const Location = require('../classes/location')

module.exports = class Event {
	constructor(data) {
		/**
		 * This event's categories
		 * @type {(
		 * 		"block_breaker"
		 * 		|"block"
		 * 		|"entity"
		 * 		|"explosion"
		 * 		|"entity_damage"
		 * 		|"inventory"
		 * 		|"player"
		 * 	)[]}
		 */
		this.categories = []
		/** 
		 * This event's name 
		 * @type {(
		 * 		 "block_broken"
		 * 		|"block_explode"
		 * 		|"block_place"
		 * 		|"entity_attacked"
		 * 		|"entity_damaged"
		 * 		|"entity_death"
		 * 		|"entity_explode"
		 * 		|"inventory_click"
		 * 		|"inventory_close"
		 * 		|"inventory_move"
		 * 		|"inventory_open"
		 * )}
		 */
		this.event = data.event
		/**
		 * The date and time at which this event occurred
		 * @type {Date}
		 */
		this.date = new Date(data.timestamp)
		/**
		 * The raw data of this event as parsed from the log file
		 * @type {Object}
		 */
		this.raw = data
	}
	static get(data) {
		if (fs.existsSync(`events/${data.event}.js`)) {
			return new (require(`./${data.event}`))(data)
		} else {
			return new this(data)
		}
	}
	/**
	 * @returns {Location[]}
	 */
	getLocations() {
		return []
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return []
	}
}