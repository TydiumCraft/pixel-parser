const Block = require("./block")
const Entity = require("./entity")
const Inventory = require("./inventory")
const Location = require("./location")

module.exports = class Container {
	constructor(data) {
		/**
		 * Whether this container is an entity, block, or double chest.
		 * @type {("entity"|"block"|"double_chest"|"unknown")}
		 */
		this.type = data.type
		switch (this.type) {
			case 'entity':
				/** This container's entity */
				this.entity = Entity.get(data.entity)
				break
			case 'block':
				/** This container's block */
				this.block = Entity.get(data.block)
				break
			case 'double_chest':
				/** The left side of this double chest */
				this.left_side = new Block(data.left_side)
				/** The right side of this double chest */
				this.right_side = new Block(data.right_side)
				break
		}
		if (data.inventory != null) {
			/** The inventory owned by this container */
			this.inventory = new Inventory(data.inventory)
		}
	}
	/**
	 * Gets the locations of this container, if any
	 * @returns {Location[]}
	 */
	getLocations() {
		switch (this.type) {
			case 'entity':
				return [this.entity.location]
			case 'block':
				return [this.block.location]
			case 'double_chest':
				return [this.right_side.location, this.left_side.location]
			default:
				return []
		}
	}
}