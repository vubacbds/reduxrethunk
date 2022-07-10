const initialState = {
  list: [],
  activeId: null,
};
const HobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      //   console.log(newList);
      //   const newarr = state;
      //   console.log(action.payload);
      //   console.log(newarr);
      return {
        ...state,
        list: newList,
      };
    }
    case "SET_ACTIVE_HOBBY": {
      return state;
    }
    default:
      return state;
  }
};
export default HobbyReducer;
