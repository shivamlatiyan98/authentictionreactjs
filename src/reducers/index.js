import { combineReducers } from 'redux';

// redaclare IT AS THE FORM -REDUCER MAINLY
import { reducer as form } from 'redux-form';
import authreducer from "./auth_reducer";
// form piece of state is produced by the reducer of the redux-form mainly
const rootReducer = combineReducers({


form:form,
auth:authreducer




});

export default rootReducer;
