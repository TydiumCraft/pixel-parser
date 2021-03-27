const Block = require('../classes/block')
const Location = require('../classes/location')
const PlayerEvent = require('./playerEvent')

module.exports = class BlockBreakEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		/** The block broken by this event */
		this.block = new Block(data.block)
		
		this.categories.push('block','block_breaker')
	}
	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [
			this.block.location,
			this.player.location
		]
	}
}