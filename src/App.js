import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber } from './Actions'
import { decNumber } from './Actions'

const App = () => {

  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    // The data in react always flows from Parent to Child component which makes it Unidirectional.
    // Prop Drilling is sending data to all the components
    /*
        Redux is a pattern and library for managing and updating application state,
        using events called actions. It serves as a centralized store for state that
        needs to be used across your entire applicationm with rules ensuring that the
        state can only be updated in a predictable fashion.
    */
    /*
       Action : What to do ?
       Reducer : How to do ?
       Store/State : Object which holds the state
       Functions Associated with store : createStore(), dispatch(action), getState()
    */
    /*
        Action : Plain Javascript object that have type field.
        It will only tell what to do
        return {
          type: 'USERDATA',
          payload: num
        }
    */
    /*
         Action Creator : Pure function which creates an action
         export const incNumber = (num) => {
           return {
             type: 'INCREMENT',
             payload: num
           }
         }
    */
    /*
          Reducer : They are the functions that take the current state and an action
                    as arguments, and return a new state result.
          
          const initialState = 0;
    
          const changeTheNumber = (state = initialstate, action) => {
            switch(action.type) {
              case 'INCREMENT': return state + action.payload;
              case 'DECREMENT': return state - 1;
              default: return state;
            }
          }
    */
    /*
          Store : It brings together state, action and reducers that makeup your app.
                  It is important to note that you'll only have a single store in a Redux application.
                  Every Redux has a single root reducer function
          
          const store = createStore(rootReducer)
    */
    /*
          The global state is stored as an object inside a single store.
          The only way to change the state is to dispatch an action.
          Immutable, one way data flow.
          Changes are made with Pure reducer functions.
    */
    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App