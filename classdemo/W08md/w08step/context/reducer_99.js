
import {DISPLAY_ALERT,CLEAR_ALERT} from "./action_99";


const reducer_99=(state,action)=>{
if(action.type === DISPLAY_ALERT){
    return {
        ...state,
        showAlert:true,
        alertText: 'please provide all value',
        alertType: 'danger'
    }
}

if(action.type === CLEAR_ALERT){
    return {
        ...state,
        showAlert:false,
        alertText: '',
        alertType: ''

}
}

throw new Error(`no such action : ${action.type}`)
}
export default reducer_99;