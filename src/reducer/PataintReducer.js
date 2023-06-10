export const pataintState = {
  pataint: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PATAINT':
      const newPataint = {
        id: action.id,
        name: action.name
      };
      const allPataints = [...state.pataint, newPataint];
      return {pataint: allPataints};
    case 'REMOVE_PATAINT':
      const remainingPataints = state.pataint.filter(pd => pd.id !== action.id);
      const newState = { pataint: remainingPataints }
      return newState;  
    default:
      return state;
  }
}