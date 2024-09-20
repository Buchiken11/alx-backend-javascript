function calculateNumber(a, b) {
	try {
		const roundedA = Math.round(a);
		const roundedB = Math.round(b);

		return(roundedA + roundedB);
	} catch(error) {
		console.log('error occured, error');
	};
}

const calc = calculateNumber(1.5, 2.4);
console.log('the value is:', calc)

module.exports = { calculateNumber };
