
import { useReducer } from "react";

// Reducer function
function reducer(state, action) {

    if (action.type === "INCREMENT") {
        return state + 1;
    }
    else if (action.type === "DECREMENT") {
        return state - 1;
    }
    else {
        return state;
    }

}

function Q9() {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>Q9 - useReducer Hook</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>

        </div>
    );
}

export default Q9;
