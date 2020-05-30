# async-local-storage

AsyncLocalStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app in web browser. It should be used instead of LocalStorage.

[![NPM](https://img.shields.io/npm/v/async-local-storage.svg)](https://www.npmjs.com/package/@createnextapp/async-local-storage) ![npm bundle size](https://img.shields.io/bundlephobia/min/@createnextapp/async-local-storage)

## ❓ Why AsyncLocalStorage instead of LocalStorage?

**Cons of LocalStorage**

LocalStorage is synchronous, each local storage operation you run will be one-at-a-time. For complex applications this is a big no-no as it'll slow down your app's runtime.

**Pros of AsyncLocalStorage**

AsyncLocalStorage is asynchronous, each local async storage operation you run will be multi-at-a-time. It'll speed up your app's runtime.

The AsyncLocalStorage JavaScript code is a facade that provides [a clear JavaScript API](./API.md), real Error objects, and non-multi functions. Each method in the API returns a Promise object.

## 🔧 Install

async-local-storage is available on npm. It can be installed with the following command:

```
npm install --save @createnextapp/async-local-storage
```

async-local-storage is available on yarn as well. It can be installed with the following command:

```
yarn add @createnextapp/async-local-storage
```

## 💡 Usage

To learn more how to use async-local-storage:

* [API Documentation](./API.md)

### Import 

```js
import AsyncLocalStorage from '@createnextapp/async-local-storage'
```

### Store data

```js
storeData = async () => {
  try {
    await AsyncLocalStorage.setItem('@key', 'value')
  } catch(e) {
    // error
  }
}
```

### Read data

```js
readData = async () => {
  let data

  try {
    data = await AsyncLocalStorage.getItem('@key')
  } catch(e) {
    // error
  }

  console.log(data)

  /*
    output: 
    value
  */
}
```

## 💖 Wrap Up

If you think any of the `async-local-storage` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `async-local-storage` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
