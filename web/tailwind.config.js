module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			// add 7-12 rows layout
			gridTemplateRows: {
				'7': 'repeat(7, minmax(0, 1fr))',
				'8': 'repeat(8, minmax(0, 1fr))',
				'9': 'repeat(9, minmax(0, 1fr))',
				'10': 'repeat(10, minmax(0, 1fr))',
				'11': 'repeat(11, minmax(0, 1fr))',
				'12': 'repeat(12, minmax(0, 1fr))'
			},
			gridRow: {
				'span-7': 'span 7 / span 7',
				'span-8': 'span 8 / span 8',
				'span-9': 'span 9 / span 9',
				'span-10': 'span 10 / span 10',
				'span-11': 'span 11 / span 11',
				'span-12': 'span 12 / span 12'
			},
			gridRowStart: {
				'7': '7',
				'8': '8',
				'9': '9',
				'10': '10',
				'11': '11',
				'12': '12'
			},
			gridRowEnd: {
				'7': '7',
				'8': '8',
				'9': '9',
				'10': '10',
				'11': '11',
				'12': '12'
			}
		},
		variants: {
			extend: {},
		},
		plugins: [],
	}
}
