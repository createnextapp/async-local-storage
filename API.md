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

Stores a `value` for the `key`, invokes (optional) `callback` once completed.

**Function**:

```js
static setItem(key, value, [callback])
```

**Returns**:

`Promise` object.

**Example**:

```js
setValue = async () => {
  try {
    await LocalAsyncStorage.setItem('@key', 'value')
  } catch(e) {
    // set error
  }
}
```

## `getItem`

Fetches a data for a given `key`, invokes (optional) callback once completed.

**Function**:

```js
static getItem(key, [callback])
```

**Returns**:

`Promise` with data, if exists, `null` otherwise.

**Example**:

```js
getItem = async () => {
  let item

  try {
    item = await LocalAsyncStorage.getItem('@key')
  } catch(e) {
    // read error
  }

  console.log(item)
}
```

## `removeItem`

Removes item for a `key`, invokes (optional) callback once completed.

**Function**:

```js
static removeItem(key, [callback])
```

**Returns**:

`Promise` object.

**Example**:

```js
removeItem = async () => {
  try {
    await LocalAsyncStorage.removeItem('@key')
  } catch(e) {
    // remove error
  }
}
```

## `clearStorage`

Removes **whole** `LocalAsyncStorage` data, for all clients, libraries, etc. You probably want to use [removeItem](#removeItem) or [removeMultiple](#removeMultiple) to clear only your App's keys.

**Function**:

```js
static clearStorage([callback])
```

**Returns**:

`Promise` object.

**Example**:

```js
clearStorage = async () => {
  try {
    await LocalAsyncStorage.clearStorage()
  } catch(e) {
    // clear error
  }
}
```

## `getKeys`

Returns all keys known to your App, for all callers, libraries, etc. Once completed, invokes `callback` with errors (if any) and array of keys.

**Function**:

```js
static getKeys([callback])
```

**Returns**:

`Promise` object.

**Example**:

```js
getKeys = async () => {
  let keys = []

  try {
    keys = await LocalAsyncStorage.getKeys()
  } catch(e) {
    // read key error
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

`Promise` object.

**Example**:

```js
setMultiple = async () => {
  const firstPair = { key1: 'hello1' };
  const secondPair = { key2: 'hello2' };

  try {
    await LocalAsyncStorage.setMultiple([value1, value2])
  } catch(e) {
    //save error
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

`Promise` of array with coresponding key-value pairs found, stored as `[key, value]` array.

**Example**:

```js
getMultiple = async () => {
  let values

  try {
    values = await LocalAsyncStorage.getMultiple(['@MyApp_user', '@MyApp_key'])
  } catch(e) {
    // read error
  }

  console.log(values)
}
```

## `removeMultiple`

Clears multiple key-value entries for given array of `keys` in a batch. Once completed, invokes a `callback` with errors (if any).

**Function**:

```js
static removeMultiple(keys, [callback])
```

**Returns**:

`Promise` object.

**Example**:

```js
removeFew = async () => {
  const keys = ['key1', 'key1']
  
  try {
    await LocalAsyncStorage.removeMultiple(keys)
  } catch(e) {
    // remove error
  }
}
```
