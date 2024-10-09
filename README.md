# HashMap Implementation in JavaScript

This project implements a HashMap data structure in JavaScript. It provides basic functionality for storing and retrieving key-value pairs with efficient lookup times.

## Features

- Set key-value pairs
- Get values by key
- Check for key existence
- Remove key-value pairs
- Get the number of stored items
- Clear all entries
- Retrieve all keys, values, or entries
- Automatic resizing to maintain performance

## Usage

To use the HashMap in your project:

1. Import the HashMap:

   ```javascript
   import HashMap from './path/to/HashMap.js'
   ```

2. Create a new instance:

   ```javascript
   const map = new HashMap()
   ```

3. Use the available methods:
   ```javascript
   map.set('key', 'value')
   const value = map.get('key')
   const hasKey = map.has('key')
   map.remove('key')
   const size = map.length()
   map.clear()
   const keys = map.keys()
   const values = map.values()
   const entries = map.entries()
   ```

## Methods

- `set(key, value)`: Adds a key-value pair to the HashMap.
- `get(key)`: Returns the value associated with the given key, or null if not found.
- `has(key)`: Returns true if the key exists in the HashMap, false otherwise.
- `remove(key)`: Removes the key-value pair with the given key. Returns true if successful, false if the key wasn't found.
- `length()`: Returns the number of key-value pairs in the HashMap.
- `clear()`: Removes all key-value pairs from the HashMap.
- `keys()`: Returns an array of all keys in the HashMap.
- `values()`: Returns an array of all values in the HashMap.
- `entries()`: Returns an array of all [key, value] pairs in the HashMap.

## Implementation Details

- The HashMap uses an array of buckets to store key-value pairs.
- Collision resolution is handled through separate chaining.
- The HashMap automatically resizes when the load factor exceeds 0.75.

## Testing

To run the tests:

1. Ensure you have Node.js installed.
2. Navigate to the project directory in your terminal.
3. Run the following command:
   ```
   node main.js
   ```

The test suite in `main.js` covers various aspects of the HashMap functionality, including insertion, retrieval, overwriting, removal, and handling of collisions and resizing.

## Contributing

Contributions to improve the HashMap implementation or extend its functionality are welcome. Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).
