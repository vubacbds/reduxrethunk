const initialState = {
  list: [],
};
const Todo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO": {
      const newList = action.payload;

      //newList.push(action.payload);
      console.log("newlist", newList);
      return {
        list: newList,
      };
    }
    default:
      return state;
  }
};
export default Todo;
