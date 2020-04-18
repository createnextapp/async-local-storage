# Local Async Storage API

**Table of Contents**
  
  - [setItem](#setItem)
  - [getItem](#getItem)
  - [removeItem](#removeItem)
  - [clearStorage](#clearStorage)
  - [getKeys](#getKeys)
  - [setMultiple](#setMultiple)
  - [getMultiple](#getMultiple)

## `setItem`

Stores a `value` for the `key`, invokes (optional) `callback` once completed.

**Signature**:

```js
static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void): Promise
```

**Returns**:

`Promise` object.

**Example**:

```js

setValue = async () => {
  try {
    await LocalAsyncStorage.setItem('@MyApp_key', 'my secret value')
  } catch(e) {
    // set error
  }

  console.log('Done.')
}
```

## `getItem`

Fetches a data for a given `key`, invokes (optional) callback once completed.

**Signature**:

```js
static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void): Promise
```

**Returns**:

`Promise` with data, if exists, `null` otherwise.

**Example**:

```js

getValue = async () => {
  try {
    const value = await LocalAsyncStorage.getItem('@MyApp_key')
  } catch(e) {
    // read error
  }

  console.log('Done.')

}
```

## `removeItem`

Removes item for a `key`, invokes (optional) callback once completed.

**Signature**:

```js
static removeItem(key: string, [callback]: ?(error: ?Error) => void): Promise
```

**Returns**:

`Promise` object.

**Example**:

```js
removeItem = async () => {
  try {
    await LocalAsyncStorage.removeItem('@MyApp_key')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
```

## `clearStorage`

Removes **whole** `LocalAsyncStorage` data, for all clients, libraries, etc. You probably want to use [removeItem](#removeItem) or [removeMultiple](#removeMultiple) to clear only your App's keys.

**Signature**:

```js
static clearStorage([callback]: ?(error: ?Error) => void): Promise
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

  console.log('Done.')
}
```

## `getKeys`

Returns all keys known to your App, for all callers, libraries, etc. Once completed, invokes `callback` with errors (if any) and array of keys.


**Signature**:

```js
static getKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void): Promise
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
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
}
```

## `setItems`

Stores multiple key-value pairs in a batch. Once completed, `callback` with any errors will be called.

**Signature**:

```js
static setItems(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void): Promise
```

**Returns**:

`Promise` object.

**Example**:

```js
multiSet = async () => {
  const firstPair = ["@MyApp_user", "value_1"]
  const secondPair = ["@MyApp_key", "value_2"]
  try {
    await LocalAsyncStorage.setItems([firstPair, secondPair])
  } catch(e) {
    //save error
  }

  console.log("Done.")
}
```

## `getMultiple`

Fetches multiple key-value pairs for given array of `keys` in a batch. Once completed, invokes `callback` with errors (if any) and results.

**Signature**:

```js
static getMultiple(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void): Promise
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

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
}
```

## `removeMultiple`

Clears multiple key-value entries for given array of `keys` in a batch. Once completed, invokes a `callback` with errors (if any).

**Signature**:

```js
static removeMultiple(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)
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

  console.log('Done')
}

```
