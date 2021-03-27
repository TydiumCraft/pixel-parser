const Block = require('../classes/block')
const PlayerEvent = require('./playerEvent')

module.exports = class BlockPlaceEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		/** The block that was placed by this event */
		this.placed_block = new Block(data.placed_block)
		if (data.placed_on) {
			/** The block this event's block was placed on */
			this.placed_on = new Block(data.placed_on)
		}
		
		this.categories.push('block')
	}
	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.placed_block.location, this.player.location]
	}
}