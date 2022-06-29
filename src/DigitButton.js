import { ACTIONS } from "./App"

/** 
 * 
 * @Description: Creating a basic calculator in JavaScript React  
 * @Author: Roderichs
 * @Date: 15/02/2020
 * 
*/

export default function DigitButton({ dispatch, digit }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    )
}