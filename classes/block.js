const LocationHolder = require("./locationHolder");

module.exports = class Block extends LocationHolder {
	constructor(data) {
		super(data.location)
		/** This block's type, i.e. `minecraft:stone` */
		this.type = data.type
	}
	toString() {
		return `${this.type} at ${this.location}`
	}
}