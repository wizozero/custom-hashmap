function HashMap() {
	const buckets = new Array(16)
	let size = 0
	const loadFactor = 0.75

	function hash(key) {
		let hashCode = 0

		const primenumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primenumber * hashCode + (key.charCodeAt(i) % buckets.length)
		}

		if (hashCode < 0 || hashCode >= buckets.length) {
			throw new Error('Trying to access index out of bound')
		}

		return hashCode
	}

	return {
		set(key, value) {
			const index = hash(key)

			if (buckets[index] === undefined) {
				buckets[index] = [{ key, value }]
				size++
			} else {
				let found = false
				for (i = 0; i < buckets[index].length; i++) {
					if (buckets[index][i].key === key) {
						buckets[index][i].value = value
						found = true
						break
					}
				}
				if (!found) {
					buckets[index].push({ key, value })
					size++
				}
				if (size / buckets.length > loadFactor) {
					// resize()
				}
			}
		},
		get(key) {
			const index = hash(key)

			if (buckets[index] === undefined) return null

			for (i = 0; i < buckets[index].length; i++) {
				if (buckets[index][i].key === key) {
					return buckets[index][i].value
				}
			}
		},
		has(key) {
			const index = hash(key)

			if (buckets[index] === undefined) return false

			for (i = 0; i < buckets[index].length; i++) {
				if (buckets[index][i].key === key) {
					return true
				}
			}
			return false
		},
	}
}
