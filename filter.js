const Location = require("./classes/location");
const Event = require('./events')

Number.prototype.inRange = function(min, max) {
	return ((min ? this > min : true) && (max ? this < max : true))
}

/**
 * @param {Event[]} events
 * @param {{
 * 		distance: {
 * 			location: Location,
 * 			max: number,
 * 			min: number?
 * 		}?,
 * 		event_types: (
 * 			 "block_broken"
 * 			|"block_explode"
 * 			|"block_place"
 * 			|"entity_attacked"
 * 			|"entity_damaged"
 * 			|"entity_death"
 * 			|"entity_explode"
 * 			|"inventory_click"
 * 			|"inventory_close"
 * 			|"inventory_move"
 * 			|"inventory_open"
 * 			|"player_interact"
 * 		)[]?,
 * 		names: String[]?,
 * 		timeframe: {
 * 			after: Date?,
 * 			before: Date?
 * 		}?,
 * 		categories: (
 * 			 "block_breaker"
 * 			|"block"
 * 			|"entity"
 * 			|"explosion"
 * 			|"entity_damage"
 * 			|"inventory"
 * 			|"player"
 * 		)[]?,
 * 		damage_causes: (
 * 		 	 "block_explosion"
 * 			|"contact"
 *	 		|"cramming"
 * 			|"custom"
 * 			|"dragon_breath"
 * 			|"drowning"
 * 			|"dryout"
 * 			|"entity_attack"
 * 			|"entity_explosion"
 * 			|"entity_sweep_attack"
 * 			|"fall"
 * 			|"falling_block"
 * 			|"fire"
 * 			|"fire_tick"
 * 			|"fly_into_wall"
 * 			|"hot_floor"
 * 			|"lava"
 * 			|"lightning"
 * 			|"magic"
 * 			|"melting"
 * 			|"poison"
 * 			|"projectile"
 * 			|"starvation"
 * 			|"suffocation"
 * 			|"suicide"
 * 			|"thorns"
 * 			|"void"
 * 			|"wither"
 * 		)[]?,
 * 		actions: (
 * 			 "clone_stack"
 * 			|"collect_to_cursor"
 * 			|"drop_all_cursor"
 * 			|"drop_all_slot"
 * 			|"drop_one_cursor"
 * 			|"drop_one_slot"
 * 			|"hotbar_move_and_readd"
 * 			|"hotbar_swap"
 * 			|"move_to_other_inventory"
 * 			|"nothing"
 * 			|"pickup_all"
 * 			|"pickup_half"
 * 			|"pickup_one"
 * 			|"pickup_some"
 * 			|"place_all"
 * 			|"place_one"
 * 			|"place_some"
 * 			|"swap_with_cursor"
 * 			|"unknown"
 * 			|"left_click_air"
 * 			|"left_click_block"
 * 			|"physical"
 * 			|"right_click_air"
 * 			|"right_click_block"
 * 		)[]?,
 *   	slot_types: (
 * 			 "armor"
 * 			|"container"
 * 			|"crafting"
 * 			|"fuel"
 * 			|"outside"
 * 			|"quickbar"
 * 			|"result"
 * 		)[]?,
 * 		damage: {
 * 			min: number?,
 * 			max: number?
 * 		}?
 * }} params 
 */
exports.filter = function filter(events, params) {
	if (params.names) {
		params.names = params.names.map(name => name.toLowerCase())
	}
	if (params.timeframe) {
		params.timeframe.before = params.timeframe.before || {getTime: function(){}} // mbruh
		params.timeframe.after = params.timeframe.after || {getTime: function(){}}
	}
	return events.filter(event => {
		if (params.event_types && !params.event_types.includes(event.event)) {
			return false
		}
		if (params.distance && !event.getLocations().find(location => location.getDistance(params.distance.location).inRange(params.distance.min, params.distance.max))) {
			return false
		}
		if (params.names && !event.getNames().find(name => params.names.includes(name.toLowerCase()))) {
			return false
		}
		if (params.damage_causes && (!event.cause || !params.damage_causes.includes(event.cause))) {
			return false
		}
		if (params.timeframe && (!event.date || !event.date.getTime().inRange(params.timeframe.after.getTime(), params.timeframe.before.getTime()))) {
			return false
		}
			return false
		if (params.actions && (!event.action || !params.actions.find(event.action))) {
		}
		if (params.slot_types && (!event.slot_type || !params.slot_types.find(event.slot_type))) {
			return false
		}
		if (params.damage && (!event.damage || event.damage.inRange(params.damage.min, params.damage.max))) {
			return false
		}
		if (params.categories && !params.categories.find(item => event.categories.includes(item))) {
			return false
		}
		return true
	})
}