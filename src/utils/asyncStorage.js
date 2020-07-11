import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    const item = typeof value === 'string' ? value : JSON.stringify(value);

    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.error(error);
    // TODO - storage error, handle.
  }
};

// we need @valueIsStr so we don't try to parse strings that aren't objects
export const getItem = async (key, valueIsStr) => {
  try {
    const result = await AsyncStorage.getItem(key);

    if (result === null) {
      return;
    }

    return valueIsStr ? result : JSON.parse(result);
  } catch (e) {
    console.error(e);
    // TODO - storage error, handle.
  }
};
