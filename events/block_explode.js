const Event = require(".");
const Block = require("../classes/block");

module.exports = class BlockExplodeEvent extends Event {
	constructor(data) {
		super(data)
		/** The amount of blocks destroyed in this event */
		this.destroyed_blocks = data.destroyed_blocks
		/** The block that exploded */
		this.block = new Block(data.block)

		this.categories.push('explosion', 'block_breaker', 'block')
	}
	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.block.location]
	}
}