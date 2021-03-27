const InventoryEvent = require('./inventoryEvent')
const Item = require('../classes/item')
const Inventory = require('../classes/inventory')

module.exports = class InventoryClickEvent extends InventoryEvent {
	constructor(data) {
		super(data)
		if (data.item) {
			/** The currently clicked item */
			this.item = new Item(data.item)
		}
		if (data.cursor_item) {
			/** The item currently on the cursor */
			this.cursor_item = new Item(data.cursor_item)
		}
		if (data.clicked_inventory) {
			/** The inventory clicked in this event */
			this.clicked_inventory = new Inventory(data.clicked_inventory)
		}
		/** The slot number involved in this event */
		this.slot_number = data.slot_number
		/**
		 * The inventory action caused by this event
		 * @type {(
		 * 		"clone_stack"
		 * 		|"collect_to_cursor"
		 * 		|"drop_all_cursor"
		 * 		|"drop_all_slot"
		 * 		|"drop_one_cursor"
		 * 		|"drop_one_slot"
		 * 		|"hotbar_move_and_readd"
		 * 		|"hotbar_swap"
		 * 		|"move_to_other_inventory"
		 * 		|"nothing"
		 * 		|"pickup_all"
		 * 		|"pickup_half"
		 * 		|"pickup_one"
		 * 		|"pickup_some"
		 * 		|"place_all"
		 * 		|"place_one"
		 * 		|"place_some"
		 * 		|"swap_with_cursor"
		 * 		|"unknown"
		 * )}
		 */
		this.action = data.action
		/**
		 * The type of slot that was clicked
		 * @type {(
		 * 		"armor"
		 * 		|"container"
		 * 		|"crafting"
		 * 		|"fuel"
		 * 		|"outside"
		 * 		|"quickbar"
		 * 		|"result"
		 * )}
		 */
		this.slot_type = data.slot_type
		/**
		 * The type of click that initiated this event
		 * @type {(
		 * 		"control_drop"
		 * 		|"creative"
		 * 		|"double_click"
		 * 		|"drop"
		 * 		|"left"
		 * 		|"middle"
		 * 		|"number_key"
		 * 		|"right"
		 * 		|"shift_left"
		 * 		|"shift_right"
		 * 		|"swap_offhand"
		 * 		|"unknown"
		 * 		|"window_border_left"
		 * 		|"window_border_right"
		 * )}
		 */
		this.click_type = data.click_type
	}
}