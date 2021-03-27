const LocationHolder = require("./locationHolder");

module.exports = class Entity extends LocationHolder {
	constructor(data) {
		super(data.location)
		/** 
		 * This entity's type, i.e. `minecraft:creeper` 
		 * @type {string}
		 */
		this.type = data.type
		/** 
		 * This entity's display name 
		 * @type {string}
		 */
		this.name = data.name
		/**
		 * This entity's unique identifier.
		 ** This exists for all entities and is ideal for == conditions.
		 ** For players, this will return their proper UUID.
		 * @type {string}
		 */
		this.uuid = data.uuid
	}

	toString() {
		return `${this.type} "${this.name}" at ${this.location}`
	}

	/**
	 * Gets the upmost entity class from the given data's subclass.
	 * @param {Object} data 
	 * @returns {Entity}
	 */
	static get(data) {
		if (!data) {return null}
		const PrimedTNT = require("./primedTNT");
		const Projectile = require("./projectile");
		const Player = require("./player");
		const LivingEntity = require("./livingEntity");
		switch (data.subclass) {
			case 'living':
				return new LivingEntity(data)
			case 'tnt':
				return new PrimedTNT(data)
			case 'projectile':
				return new Projectile(data)
			case 'player':
				return new Player(data)
			default:
				return new Entity(data)
		}
	}
}