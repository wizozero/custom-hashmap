import HashMap from './index.js'

function runTests() {
	const test = new HashMap()

	console.log('Starting HashMap tests:')

	// Test 1: Insertion and retrieval
	console.log('\nTest 1: Insertion and retrieval')
	test.set('apple', 'red')
	test.set('banana', 'yellow')
	console.log(`get('apple') returns: ${test.get('apple')}`)
	console.log(`get('banana') returns: ${test.get('banana')}`)

	// Test 2: Overwriting value
	console.log('\nTest 2: Overwriting value')
	test.set('apple', 'green')
	console.log(`get('apple') after overwriting returns: ${test.get('apple')}`)

	// Test 3: Checking existence
	console.log('\nTest 3: Checking existence')
	console.log(`has('apple') returns: ${test.has('apple')}`)
	console.log(`has('grape') returns: ${test.has('grape')}`)

	// Test 4: Removal
	console.log('\nTest 4: Removal')
	test.remove('banana')
	console.log(`has('banana') after removal returns: ${test.has('banana')}`)

	// Test 5: Length
	console.log('\nTest 5: Length')
	console.log(`length() returns: ${test.length()}`)

	// Test 6: Keys, values, and entries
	console.log('\nTest 6: Keys, values, and entries')
	test.set('carrot', 'orange')
	console.log('Keys:', test.keys())
	console.log('Values:', test.values())
	console.log('Entries:', test.entries())

	// Test 7: Clearing
	console.log('\nTest 7: Clearing')
	test.clear()
	console.log(`length() after clear() returns: ${test.length()}`)

	// Test 8: Collision handling
	console.log('\nTest 8: Collision handling')
	// Assuming these keys generate the same hash
	test.set('abc', 1)
	test.set('cba', 2)
	console.log(`get('abc') returns: ${test.get('abc')}`)
	console.log(`get('cba') returns: ${test.get('cba')}`)

	// Test 9: Resizing
	console.log('\nTest 9: Resizing')
	for (let i = 0; i < 20; i++) {
		test.set(`key${i}`, i)
	}
	console.log(`length() after inserting 20 elements: ${test.length()}`)

	console.log('\nTests completed.')
}

runTests()
