# Local Async Storage API

**Table of Contents**
  
  - [setItem](#setItem)
  - [getItem](#getItem)
  - [removeItem](#removeItem)
  - [clearStorage](#clearStorage)
  - [getKeys](#getKeys)
  - [setMultiple](#setMultiple)
  - [getMultiple](#getMultiple)
  - [removeMultiple](#removeMultiple)

## `setItem`

Sets the `value` for a `key` and invokes a callback upon completion.

**Functions**:

```js
static setItem(key, value, [callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>Yes</td>
      <td>Key of the item to set.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>string</td>
      <td>Yes</td>
      <td>Value to set for the key.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(error: ?Error) => void</td>
      <td>No</td>
      <td>Function that will be called with any error.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
setValue = async () => {
  try {
    await LocalAsyncStorage.setItem('@key', 'value')
  } catch(e) {
    // error
  }
}
```

## `getItem`

Fetches an item for a key and invokes (optional) a callback upon completion.

**Function**:

```js
static getItem(key, [callback])
```

**Returns**:

A `Promise` with item, if exists, `null` otherwise.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>Yes</td>
      <td>Key of the item to fetch.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(error: ?Error, result: ?string) => void</td>
      <td>No</td>
      <td>Function that will be called with a result if found or any error.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
getItem = async () => {
  let item

  try {
    item = await LocalAsyncStorage.getItem('@key')
  } catch(e) {
    // error
  }

  console.log(item)
}
```

## `removeItem`

Removes an item for a `key` and invokes (optional) a callback upon completion.

**Function**:

```js
static removeItem(key, [callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>Yes</td>
      <td>Key of the item to remove.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(error: ?Error) => void</td>
      <td>No</td>
      <td>Function that will be called with any error.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
removeItem = async () => {
  try {
    await LocalAsyncStorage.removeItem('@key')
  } catch(e) {
    // error
  }
}
```

## `clearStorage`

Erases all `LocalAsyncStorage` for all clients, libraries, etc. You probably don't want to call this; use [removeItem](#removeItem) or [removeMultiple](#removeMultiple) to clear only your app's keys.

**Function**:

```js
static clearStorage([callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>callback</td>
      <td>?(error: ?Error) => void</td>
      <td>No</td>
      <td>Function that will be called with any error.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
clearStorage = async () => {
  try {
    await LocalAsyncStorage.clearStorage()
  } catch(e) {
    // error
  }
}
```

## `getKeys`

Gets all keys known to your app; for all callers, libraries, etc, and invokes (optional) a `callback` upon completion.

**Function**:

```js
static getKeys([callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>callback</td>
      <td>?(error: ?Error, keys: ?Array) => void	</td>
      <td>No</td>
      <td>Function that will be called with all keys found and any error.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
getKeys = async () => {
  let keys = []

  try {
    keys = await LocalAsyncStorage.getKeys()
  } catch(e) {
    // error
  }

  console.log(keys)
}
```

## `setMultiple`

Stores multiple key-value pairs in a batch. Once completed, `callback` with any errors will be called.

**Function**:

```js
static setMultiple(keyValuePairs, [callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keyValuePairs</td>
      <td>Array<Object></td>
      <td>Yes</td>
      <td>Array of key-value array for the items to set.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(errors: ?Array) => void</td>
      <td>No</td>
      <td>Function that will be called with an array of any key-specific errors found.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
setMultiple = async () => {
  const firstPair = { key1: 'hello1' };
  const secondPair = { key2: 'hello2' };

  try {
    await LocalAsyncStorage.setMultiple([value1, value2])
  } catch(e) {
    // error
  }
}
```

## `getMultiple`

Fetches multiple key-value pairs for given array of `keys` in a batch. Once completed, invokes `callback` with errors (if any) and results.

**Function**:

```js
static getMultiple(keys, [callback])
```

**Returns**:

A `Promise` of array with coresponding key-value pairs found, stored as `{key: value}` array.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keys</td>
      <td>Array<Object></td>
      <td>Yes</td>
      <td>Array of key for the items to get.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(errors: ?Array, result: ?Array<Array>) => void</td>
      <td>No</td>
      <td>Function that will be called with a key-value array of the results, plus an array of any key-specific errors found.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
getMultiple = async () => {
  let values

  try {
    values = await LocalAsyncStorage.getMultiple(['@key1', '@key2'])
  } catch(e) {
    // error
  }

  console.log(values)
}
```

## `removeMultiple`

Delete multiple key-value entries for given array of `keys` in a batch. Once completed, invokes a `callback` with errors (if any).

**Function**:

```js
static removeMultiple(keys, [callback])
```

**Returns**:

A `Promise` object.

**Parameters:**

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keys</td>
      <td>Array<Object></td>
      <td>Yes</td>
      <td>Array of key for the items to delete.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>?(errors: ?Array) => void</td>
      <td>No</td>
      <td>Function that will be called an array of any key-specific errors found.</td>
    </tr>
  </tbody>
</table>

**Example**:

```js
removeFew = async () => {
  const keys = ['key1', 'key1']
  
  try {
    await LocalAsyncStorage.removeMultiple(keys)
  } catch(e) {
    // error
  }
}
```
