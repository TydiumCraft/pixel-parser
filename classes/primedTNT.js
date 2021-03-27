const Entity = require("./entity");

module.exports = class PrimedTNT extends Entity {
	constructor(data) {
		super(data)
		if (data.source != null) {
			/** The entity who primed this TNT */
			this.source = Entity.get(data.source)
		}
	}
	toString() {
		return `${this.type} "${this.name}" at ${this.location}`
	}
}