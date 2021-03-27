const Entity = require('./entity')

module.exports = class LivingEntity extends Entity {
	constructor(data) {
		super(data)
		/** The current health of this entity */
		this.health = data.health
		if (data.killer != null) {
			/** Who killed this entity */
			this.killer = Entity.get(data.killer)
		}
	}
}