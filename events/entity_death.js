const EntityEvent = require('./entityEvent')

module.exports = class EntityDeathEvent extends EntityEvent {
	constructor(data) {
		super(data)
	}
}