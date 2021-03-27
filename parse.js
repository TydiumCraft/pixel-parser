const Event = require("./events")

/**
 * @param {String[]} logs 
 * @returns {Object[]}
 */
exports.getJSON = function(logs) {
	return logs.map((line,index) => {
		line = line.trim()
		if (line == '') {
			return
		}
		let json
		try {
			json = JSON.parse(line)
		} catch(err) {
			console.warn(`Failed to parse line ${index}: ${err.message}`)
		}
		return json
	}).filter(val => val)
}

exports.parse = function(logs) {
	let json = exports.getJSON(logs)
	return json.map(entry => Event.get(entry))
}