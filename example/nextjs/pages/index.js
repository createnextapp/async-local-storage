import AsyncLocalStorage from '@createnextapp/async-local-storage'

export default function Index() {
  const setItem = async () => {
    try {
      await AsyncLocalStorage.setItem('@me', 'Bunlong')
    } catch (e) {
      // read error
    }
    
    console.log('Set.')
  }

  const getItem = async () => {
    let item

    try {
      item = await AsyncLocalStorage.getItem('@me')
    } catch(e) {
      // read error
    }

    console.log(item)
  }

  const removeItem = async () => {
    try {
      await AsyncLocalStorage.removeItem('@me')
    } catch(e) {
      // remove error
    }
  
    console.log('Remove.')
  }

  const clearStorage = async () => {
    try {
      await AsyncLocalStorage.clearStorage()
    } catch(e) {
      // remove error
    }
  
    console.log('Remove.')
  }

  const getKeys = async () => {
    let keys = []
    
    try {
      keys = await AsyncLocalStorage.getKeys()
    } catch(e) {
      // read key error
    }
  
    console.log(keys)
  }

  const setMultiple = async () => {
    const value1 = { key1: 'hello1' };
    const value2 = { key2: 'hello2' };

    try {
      await AsyncLocalStorage.setMultiple([value1, value2])
    } catch(e) {
      //save error
    }
  
    console.log("Done.")
  }

  const getMultiple = async () => {
    let values

    try {
      values = await AsyncLocalStorage.getMultiple(['key1', 'key2'])
    } catch(e) {
      // read error
    }

    console.log(values)
  }

  const removeMultiple = async () => {
    const keys = ['key1', 'key2']

    try {
      await AsyncLocalStorage.removeMultiple(keys)
    } catch(e) {
      // remove error
    }

    console.log('Done')
  }

  return (
    <>
      <button onClick={setItem}>Set item</button>
      <button onClick={getItem}>Get item</button>
      <button onClick={removeItem}>Remove item</button>
      <button onClick={clearStorage}>Clear storage</button>
      <button onClick={getKeys}>Get keys</button>
      <button onClick={setMultiple}>Set multiple</button>
      <button onClick={getMultiple}>Get multiple</button>
      <button onClick={removeMultiple}>Remove multiple</button>
    </>
  );
}
