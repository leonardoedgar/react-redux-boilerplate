const appStore = {
  content: ''
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT': {
      return {...appStore, content: action.content};
    }
    default: {
      return appStore;
    }
  }
};
