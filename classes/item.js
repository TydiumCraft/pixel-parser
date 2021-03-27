module.exports = class Item {
	constructor(data) {
		/** The type of item, i.e. `minecraft:diamond` */
		this.type = data.type
		/** The amount of this item in the current slot */
		this.amount = data.amount
		/** The current durability of this item */
		this.durability = data.durability
		/** This item's display name, only if modified using an anvil. */
		this.display_name = data.display_name != '' && data.display_name
		/** A dictionary of all the enchantments on this item and their values. For example: `{"minecraft:knockback":2, "minecraft:sharpness":5}` */
		this.enchantments = data.enchantments
	}
	toString() {
		return `${this.type} ${this.display_name ? `"${this.display_name}" ` : ''}x${this.amount}`
	}
}