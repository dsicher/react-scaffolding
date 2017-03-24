export const actionTypes = {
  INCREMENT_COUNTER: 'HelloWorld/INCREMENT_COUNTER',
};

export const actions = {
  incrementCounter: () => {
    return {
      type: actionTypes.INCREMENT_COUNTER,
    };
  },
};
