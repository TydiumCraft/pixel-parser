const InventoryEvent = require('./inventoryEvent')

module.exports = class InventoryOpenEvent extends InventoryEvent {
	constructor(data) {
		super(data)
	}
}