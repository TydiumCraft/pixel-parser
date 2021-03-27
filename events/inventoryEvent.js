const Inventory = require("../classes/inventory")
const PlayerEvent = require("./playerEvent")

module.exports = class InventoryEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		/** The inventory involved in this event */
		this.inventory = new Inventory(data.inventory)

		this.categories.push('inventory')
	}
	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.player.location, ...this.inventory.holder.getLocations()]
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return [this.player.name, this.inventory.holder.type == 'entity' ? this.inventory.holder.entity.name : undefined]
	}
}