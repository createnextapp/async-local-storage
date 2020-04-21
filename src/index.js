const createPromise = (getValue, callback) => {
  return new Promise((resolve, reject) => {
    try {
      const value = getValue();
      if (callback) {
        callback(null, value);
      }
      resolve(value);
    } catch (err) {
      if (callback) {
        callback(err);
      }
      reject(err);
    }
  });
};

const createPromiseAll = (promises, callback, processResult) => {
  return Promise.all(promises).then(
    result => {
      const value = processResult ? processResult(result) : null;
      callback && callback(null, value);
      return Promise.resolve(value);
    },
    errors => {
      callback && callback(errors);
      return Promise.reject(errors);
    }
  );
};

export default class LocalAsyncStorage {
  /**
   * Sets value for key.
   */
  static setItem(key, value, callback) {
    return createPromise(() => {
      window.localStorage.setItem(key, value);
    }, callback);
  }

  /**
   * Fetches key value.
   */
  static getItem(key, callback) {
    return createPromise(() => {
      return window.localStorage.getItem(key);
    }, callback);
  }

  /**
   * Removes a key.
   */
  static removeItem(key, callback) {
    return createPromise(() => {
      return window.localStorage.removeItem(key);
    }, callback);
  }

  /**
   * Erases *all* LocalAsyncStorage for the domain.
   */
  static clearStorage(callback) {
    return createPromise(() => {
      window.localStorage.clear();
    }, callback);
  }

  /**
   * Gets *all* keys known to the app, for all callers, libraries, etc.
   */
  static getKeys(callback) {
    return createPromise(() => {
      const numberOfKeys = window.localStorage.length;
      const keys = [];
      for (let i = 0; i < numberOfKeys; i += 1) {
        const key = window.localStorage.key(i);
        keys.push(key);
      }
      return keys;
    }, callback);
  }

  /**
   * Takes an array of key-value json pairs.
   *   setMultifple([{k1: 'val1'}, {k2: 'val2'}])
   */
  static setMultiple(keyValuePairs, callback) {
    const promises = keyValuePairs.map(item => { for(const key in item) LocalAsyncStorage.setItem(key, item[key]) });
    return createPromiseAll(promises, callback);
  }

  /**
   * getMultiple resolves to an array of key-value pair objects that matches the
   * input format of getMultiple.
   *
   *   getMultiple(['k1', 'k2']) -> [{k1: 'val1'}, {'k2': 'val2'}]
   */
  static getMultiple(keys, callback) {
    const promises = keys.map(key => LocalAsyncStorage.getItem(key));
    const processResult = result => result.map((value, i) => {
      const json = {}
      json[keys[i]] = value
      return json
    });
    return createPromiseAll(promises, callback, processResult);
  }

  /**
   * Delete all the keys in the keys array.
   */
  static removeMultiple(keys, callback) {
    const promises = keys.map(key => LocalAsyncStorage.removeItem(key));
    return createPromiseAll(promises, callback);
  }
}
