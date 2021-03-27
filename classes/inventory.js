const Container = require("./container")
const Item = require("./item")

module.exports = class Inventory {
	constructor(data) {
		/** 
		 * The type of this inventory, i.e. `minecraft:shulker_box` 
		 * @type {(
		 * 		"anvil"
		 * 		|"barrel"
		 * 		|"beacon"
		 * 		|"blast_furnace"
		 * 		|"brewing"
		 * 		|"cartography"
		 * 		|"chest"
		 * 		|"crafting"
		 * 		|"creative"
		 * 		|"dispenser"
		 * 		|"dropper"
		 * 		|"enchanting"
		 * 		|"ender_chest"
		 * 		|"furnace"
		 * 		|"grindstone"
		 * 		|"hopper"
		 * 		|"lectern"
		 * 		|"loom"
		 * 		|"merchant"
		 * 		|"player"
		 * 		|"shulker_box"
		 * 		|"smithing"
		 * 		|"smoker"
		 * 		|"stonecutter"
		 * 		|"workbench"
		 * )}
		 */
		this.type = data.type
		/** The total amount of slots in this inventory */
		this.size = data.size
		/** All of the items in this inventory */
		this.contents = data.contents.map(item => item && new Item(item))
		if (data.holder != null) {
			/** The block or entity which this inventory belongs to, if any */
			this.holder = new Container(data.holder)
		}
	}

	toString() {
		return `${this.type} inventory`
	}
}