const Entity = require("../classes/entity");
const EntityEvent = require("./entityEvent");

module.exports = class EntityAttackedEvent extends EntityEvent {
	constructor(data) {
		super(data)
		/** The amount of damage dealt after armor damage reductions */
		this.damage = data.damage
		/** The amount of damage dealt before any damage reductions */
		this.raw_damage = data.raw_damage
		/** 
		 * The cause of this event
		 * @type {(
		 * 		 "block_explosion"
		 * 		|"contact"
		 * 		|"cramming"
		 * 		|"custom"
		 * 		|"dragon_breath"
		 * 		|"drowning"
		 * 		|"dryout"
		 * 		|"entity_attack"
		 * 		|"entity_explosion"
		 * 		|"entity_sweep_attack"
		 * 		|"fall"
		 * 		|"falling_block"
		 * 		|"fire"
		 * 		|"fire_tick"
		 * 		|"fly_into_wall"
		 * 		|"hot_floor"
		 * 		|"lava"
		 * 		|"lightning"
		 * 		|"magic"
		 * 		|"melting"
		 * 		|"poison"
		 * 		|"projectile"
		 * 		|"starvation"
		 * 		|"suffocation"
		 * 		|"suicide"
		 * 		|"thorns"
		 * 		|"void"
		 * 		|"wither"
		 * )}
		 */
		this.cause = data.cause
	}
}