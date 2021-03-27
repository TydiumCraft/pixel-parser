const LivingEntity = require("./livingEntity");
const Item = require('./item')

module.exports = class Player extends LivingEntity {
	constructor(data) {
		super(data)
		/** 
		 * This player's current XP level and progression as a float. 
		 ** This value equals `level + (currentXP + requiredXP)` 
		 ** For example, if a player has 4 and a half levels, this value would be 4.5.
		 */
		this.xp = data.xp
		/** The item in this player's main hand. */
		this.held_item = new Item(data.held_item)
		/** The item in this player's offhand. */
		this.offhand_item = new Item(data.offhand_item)
		/** Whether or not this player is on Bedrock Edition or not */
		this.bedrock = this.name.startsWith('-')
		if (this.bedrock) {
			/** This player's Xbox XUID, if they are on bedrock. */
			this.xuid = parseInt(this.uuid.replace(/-/g, ''), 16)
		}
	}

	toString() {
		return `Player ${this.name}`
	}

	/**
	 * Gets the url for a 2D head thumbnail for this player.
	 * @param {string} username 
	 * @returns {string}
	 */
	getHead(){
		return `https://crafatar.com/avatars/${this.uuid}?overlay`
	}

	/**
	 * Gets the url for a 3D body thumbnail for this player.
	 * @param {string} username 
	 * @returns {string}
	 */
	getBody(){
		return `https://crafatar.com/renders/body/${this.uuid}?overlay`
	}

	/**
	 * Gets the url for a 3D head thumbnail for this player.
	 * @param {string} username 
	 * @returns {string}
	 */
	getCubeHead(){
		return `https://crafatar.com/renders/head/${this.uuid}?overlay`
	}

	/**
	 * Gets the url for a bust thumbnail for this player.
	 * @param {string} username 
	 * @returns {string}
	 */
	getBust(){
		return `https://minotar.net/bust/${this.uuid}.png`
	}

	/**
	 * Gets the url for this player's full skin.
	 * @param {string} username 
	 * @returns {string}
	 */
	getSkin(){
		return this.bedrock ? `https://api.geysermc.org/v1/skin/${this.xuid}` : `https://crafatar.com/skins/${this.uuid}?overlay`
	}
}