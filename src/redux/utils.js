export const saveToLocalStorage = (state, stateName) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(stateName, serialisedState);
  } catch (error) {
    console.log(error);
  }
};

export const loadFromLocalStorage = (stateName) => {
  try {
    const serialisedState = localStorage.getItem(stateName);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};
