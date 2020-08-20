const flatten = (arr) => {
	return arr.reduce((acc, next) => {
		// Check if the next one is array 
		let isArray = Array.isArray(next)
		return acc.concat(isArray ? flatten(next) : next)
	}, [])
}

export default flatten;