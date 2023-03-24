

import{Component} from 'react'/* for class based components */
import classes from './Counter.module.css';
import {useSelector,connect, useDispatch} from 'react-redux';/* useselector , usedispatch  is a hook and connet for class based aproch*/

import { CounterAction } from './index';/* it is used for counterSlice in reacttoolkit */






const Counter = () => {
                      

 const counter=useSelector(state=>state.counter.counter);/* getting data from redux  state counter is
                                                          from configurestore and counter is a state */
 const dispatch=useDispatch();
const display=useSelector(state=>state.counter.display);

  const toggleCounterHandler = (state,action) => {
// dispatch({type:'hide'});
dispatch(CounterAction.hide());


  };


 const incrementHandler=(state,action)=>{
  // dispatch({type:'increment'});
  dispatch(CounterAction.increment());
 
 };


 const decrementHandler=(state,action)=>{
  // dispatch({type:'decrement'});
  dispatch(CounterAction.decrement());

 };


 const increaseby_x=(state,action)=>{
// dispatch({type:'increase',value:5})
 dispatch(CounterAction.increase(5));/* acces as payload in index */
 };









   return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!display ?  <div className={classes.value}>{counter}</div>:<p>hidden</p>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseby_x}>increase by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );







};
export  default Counter;

// or class based approch
/* class Counter extends Component{

  incrementHandler(){
this.props.increment();/* increment is a prop * /
  }
  decrementHandler(){

this.props.decrement();
  }
  toggleCounterHandler(){

  }
  render(){
     <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this)}>increment</button>
        <button onClick={this.decrementHandler.bind(this)}>decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
  }
}

const mapstateto_props=(state)=>{
  return {
    counter:state.counter

  };

};
const mapdispatchtoprops=(dispatch)=>{
return{
  increment:()=>dispatch({type:'increment'}),/* increment as a prop passed to connect to redux * /
  decrement:()=>dispatch({type:'decrement'}),
}
};
export default connect(mapstateto_props,mapdispatchtoprops)(Counter) ;/* it returns new function we pass counter  * /
 */


