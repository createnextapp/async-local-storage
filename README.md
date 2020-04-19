# local-async-storage

A local asynchronous storage, persistent, key-value storage system for the Web and App.

## 🔧 Install

local-async-storage is available on npm. It can be installed with the following command:

```
npm install --save local-async-storage
```

local-async-storage is available on yarn as well. It can be installed with the following command:

```
yarn add local-async-storage
```

## 💡 Usage

### Import 

```js
import LocalAsyncStorage from 'local-async-storage';
```

### `setItem`

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
