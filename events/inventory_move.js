const Event = require('.')
const Inventory = require('../classes/inventory')
const Item = require('../classes/item')

module.exports = class InventoryMoveEvent extends Event {
	constructor(data) {
		super(data)
		/** The inventory which the item was formerly in */
		this.source = new Inventory(data.source)
		/** The inventory which the item was moved into */
		this.destination = new Inventory(data.destination)
		/** The inventory that initiated this event */
		this.initiator = new Inventory(data.initiator)
		/** The item moved by this event */
		this.item = new Item(data.item)

		this.categories.push('inventory')
	}
	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.source.holder.getLocations(), this.destination.holder.getLocations(), this.initiator.holder.getLocations()].flat()
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return [
			this.source.holder.type == 'entity' ? this.source.holder.entity.name : undefined,
			this.destination.holder.type == 'entity' ? this.destination.holder.entity.name : undefined,
			this.initiator.holder.type == 'entity' ? this.initiator.holder.entity.name : undefined,
		]
	}
}