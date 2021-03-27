const Entity = require("./entity");
const Block = require("./block");

module.exports = class Projectile extends Entity {
	constructor(data) {
		super(data)
		if (data.shooter != null) {
			if (data.shooter.class == 'entity') {
				/** 
				 * The entity or block who primed this TNT 
				 * @type {Entity|Block}
				 */
				this.shooter = new Entity(data.shooter)
			} else {
				this.shooter = new Block(data.shooter)
			}
		}
	}
	toString() {
		return `${this.type} at ${this.location} shot by ${this.shooter}`
	}
}