import {createStore } from 'redux';

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      /**
       * We spread the existing todos, and add the new at the end
       */
      return [...state, action.payload];
    case 'SET_DONE':
      /**
       * The start by finding the todo matching with the id
       * passed as action.payload.
       * We then display that item with the modified "done" property
       * followed by the rest of the todos.
       */
      const item = state.find((todo) => todo.id === action.payload);
      return [
        {...item, done: true},
        ...state.filter((todo) => todo.id !== action.payload)
      ];
    case 'RESET_TODOS':
      /**
       * Resetting the todos array to it's original form: empty
       */
      return [];
    default:
      return state;
  };
};

const store = createStore(todosReducer);
export default store;