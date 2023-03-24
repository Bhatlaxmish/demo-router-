import {createStore} from 'redux';/* createstore is a function in redux */
import {configureStore, createSlice} from '@reduxjs/toolkit';



const initialcounterstate={counter:0,display:true};


const counterSlice=createSlice({
    name:'counter',
    initialstate:initialcounterstate,
    reducers:{
        increment(state){
state.counter++;
        },
        decrement(state){
state.counter--;
        },
        increase(state,action){
state.counter=state.conter+action.payload;
        },
        hide(state){
            state.display=!state.display;

                            },/* these methods automatically called  */
    }


                               });/* need identifier ,initial state ,reducers  */


const initialauthstate={
    isAuthenticated:false
};
const authSlice=createSlice({
name:"authentication",
initialstate:initialauthstate,
reducers:{
    login(state){
        state.isAuthenticated=true;
    },
    logut(state){
        state.isAuthenticated=false;
    }
}
});



const store=configureStore({
    reducer:{counter:counterSlice.reducer,
                auth:authSlice.reducer,
    },                      });/* its more like createstore it can have multiple reducer function 
                               it merges all reducer function in behind  */



store.subscribe(counterSlice.reducer);
 export const CounterAction=counterSlice.actions;
export const authAction=authSlice.actions;
export default store;









/* const reducecounter=(state={counter:0,display:true},action)=>{
if(action.type==='increment')
{
    return {
        counter:state.counter+1,
        display:state.display,
    };
}
if(action.type==='increase')
{
    return {
        counter:state.counter+action.value,
        display:state.display,

    };
}
if(action.type==='decrement')
{
    return {
        counter:state.counter-1,
        display:state.display,

    };
}
    if(action.type==="hide")
    {

        return{
            display:!state.display,
            counter:state.counter,

        };
    }


return state;
    
};
const store=createStore(reducecounter);

const  counterSubscriber=()=>{

    const lateststate=store.getState();
    return lateststate;
}; 
 store.subscribe(counterSubscriber);
store.dispatch({type:'decrement'});

export default store; */