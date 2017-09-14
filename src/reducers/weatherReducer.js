import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
      case FETCH_WEATHER:
        // state is mutated directly
        // return state.push(action.payload.data);
        //possible return state.concat([action.payload.data])

        //ES6 now. whats happening here
        // ...state takes all entrys from old array and puts it into new array

        return [action.payload.data, ...state]
      default:
        return state;
    }
};
