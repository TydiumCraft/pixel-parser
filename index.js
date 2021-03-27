const parse = require('./parse')
const filter = require('./filter')
const fs = require('fs')
const Location = require('./classes/location')

exports.parse = parse
exports.filter = filter

const loadedEvents = parse.parse(
		fs.readdirSync('logs')
			.map(file => fs.readFileSync('logs/' + file).toString().split('\n'))
			.flat()
			.filter(val => val.trim() != '')
	).sort((a, b) => a.date.getTime() - b.date.getTime())

console.log(filter.filter(loadedEvents, {
	distance: {
		min: 0,
		max: 5,
		location: Location.fromXYZ(258, 65, 1103, 'world')
	},
	timeframe: {
		before: new Date('3/26/21 8:00 PM'),
		after: new Date('3/25/21 8:00 PM'),
	},
}))