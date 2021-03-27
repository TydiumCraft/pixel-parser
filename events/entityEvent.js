const Entity = require("../classes/entity")
const Event = require("./index")

module.exports = class EntityEvent extends Event {
	constructor(data) {
		super(data)
		/** The entity involved in this event */
		this.entity = Entity.get(data.entity)

		this.categories.push('entity')
	}

	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.entity.location]
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return [this.entity.name]
	}
}