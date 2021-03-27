const Event = require("./index")
const Player = require("../classes/player")

module.exports = class PlayerEvent extends Event {
	constructor(data) {
		super(data)
		/** The player involved in this event */
		this.player = new Player(data.player)

		this.categories.push('player', 'entity')
	}

	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.player.location]
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return [this.player.name]
	}
}