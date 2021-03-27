module.exports = class Location {
	constructor(data) {
		/** This location's position on the x-axis */
		this.x = data.x
		/** This location's position on the y-axis */
		this.y = data.y
		/** This location's position on the z-axis */
		this.z = data.z
		/** 
		 * The name of the world or dimension this location resides in 
		 * @type {("world"|"world_nether"|"world_the_end")}
		 */
		this.world = data.world || 'world'
		/** The yaw direction in which this location is facing */
		this.yaw = data.yaw || 0
		/** The pitch direction in which this location is facing */
		this.pitch = data.pitch || 0
	}

	/**
	 * Returns the distance between two locations
	 * @param {Location} other 
	 * @returns {number}
	 */
	getDistance(other) {
		if (this.world != other.world) {
			return Number.MAX_SAFE_INTEGER
		}
		return Math.hypot(this.x - other.x, this.y - other.y, this.z - other.z)
	}

	/**
	 * Creates a new location instance from the given string. The following formats are supported:
	 ** `(x, y, z)[world]`
	 ** `(x, y, z) in world`
	 ** `(x, y, z)` (world defaults to "world")

	 * The syntax of the coordinates are flexible. **This function will throw an error if an invalid format is provided.**
	 * @param {String} string
	 * @returns {Location}
	 */
	static fromString(string) {
		let match = string.match(/\((\d+)[,| ]+(\d+)[,| ]+(\d+)\)\[([\w\d-]+)\]/) // matches "(0, 0, 0)[world]"
			|| string.match(/\((\d+)[,| ]+(\d+)[,| ]+(\d+)\) in ([\w\d-]+)/) // matches "(0, 0, 0) in world"
			|| string.match(/\((\d+)[,| ]+(\d+)[,| ]+(\d+)\)/) // matches "(0, 0, 0)", with world defaulting to "world"

		if (!match) {
			throw new Error('Invalid location format. Must resemble "(x, y, z)" or "(x, y, z)[world]"')
		}

		return new this({
			x: Number.parseFloat(match[1]),
			y: Number.parseFloat(match[2]),
			z: Number.parseFloat(match[3]),
			world: match[4] || 'world'
		})
	}
	
	/**
	 * Creates a new location with the given XYZ coordinates and optoinal world.
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} z 
	 * @param {("world"|"world_nether"|"world_the_end")} world
	 */
	static fromXYZ(x, y, z, world) {
		return new this({x, y, z, world})
	}

	toString() {
		return `(${this.x}, ${this.y}, ${this.z}) in ${this.world}`
	}
}