const EntityEvent = require("./entityEvent");

module.exports = class EntityExplodeEvent extends EntityEvent {
	constructor(data) {
		super(data)
		/** The amount of blocks destroyed in this event */
		this.destroyed_blocks = data.destroyed_blocks

		this.categories.push('explosion', 'block_breaker', 'block')
	}
}