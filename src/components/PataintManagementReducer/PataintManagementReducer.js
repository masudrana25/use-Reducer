import React, { useReducer, useRef } from 'react';
import { pataintState, reducer } from '../../reducer/PataintReducer';

const PataintManagementReducer = () => {
  const [state, dispatch] = useReducer(reducer, pataintState);
  const nameRef = useRef();
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PATAINT',
      name: nameRef.current.value,
      id: state.pataint.length + 1
    });
    nameRef.current.value = '';
  };
  console.log(state.pataint.length);
  return (
    <div>
      <h1>Manage Doctor's Chamber </h1>
      <h2> Total Pataint : {state.pataint.length}</h2>
      <form action="" onSubmit={HandleSubmit}>
        <input ref={nameRef} />
      </form>
      {
        state.pataint.map(pd=> <li onClick={()=>dispatch({type:'REMOVE_PATAINT',id: pd.id})}>{pd.name}</li>)
      }
    </div>
  );
};

export default PataintManagementReducer;