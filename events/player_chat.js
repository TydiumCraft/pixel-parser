const PlayerEvent = require('./playerEvent')

module.exports = class PlayerChatEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		/** 
		 * The chat message sent by the player
		 * @type {string}
		 */
		this.message = data.message
	}
	toString() {
		return `<${this.player.name}> ${this.message}`
	}
}