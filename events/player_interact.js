const Block = require('../classes/block')
const Item = require('../classes/item')
const PlayerEvent = require('./playerEvent')

module.exports = class PlayerInteractEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		if (data.clicked) {
			/** The block that was clicked */
			this.clicked = new Block(data.clicked)
			this.categories.push('block')
		}
		if (data.item) {
			/** The item used when clicking the block */
			this.item = new Item(data.item)
		}
		/** 
		 * The type of click performed by the player
		 * @type {(
		 * 		 "left_click_air"
		 * 		|"left_click_block"
		 * 		|"physical"
		 * 		|"right_click_air"
		 * 		|"right_click_block"
		 * )}
		 */
		this.action = data.action
	}

	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.player.location, this.clicked ? this.clicked.location : undefined]
	}

	toString() {
		return `${this.player} ${this.action} on ${this.clicked} with ${this.item}`
	}
}