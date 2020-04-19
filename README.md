# local-async-storage

A local asynchronous storage, persistent, key-value storage system for the Web and App.

[![NPM](https://img.shields.io/npm/v/local-async-storage.svg)](https://www.npmjs.com/package/local-async-storage)

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

To learn how to use local-async-storage:

* [API Documentation](./API.md)

### Import 

```js
import LocalAsyncStorage from 'local-async-storage'
```

### Store data

```js
storeData = async () => {
  try {
    await LocalAsyncStorage.setItem('@key', 'value')
  } catch(e) {
    // error
  }
}
```

### Read data

```js
readData = async () => {
  let item

  try {
    item = await LocalAsyncStorage.getItem('@key')
  } catch(e) {
    // error
  }

  console.log(item)
}
```

## 💖 Wrap Up

If you think any of the `local-async-storage` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `local-async-storage` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
