const PlayerEvent = require('./playerEvent')

module.exports = class PlayerChatEvent extends PlayerEvent {
	constructor(data) {
		super(data)
		/** 
		 * The command sent by the player, including the "/" prefix 
		 * @type {string}
		 */
		this.command = data.command
	}
	toString() {
		return `${this.player} executed command ${this.command}`
	}
}