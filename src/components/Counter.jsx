import React from "react";
import { decrement, increment } from "../store/slices/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())} aria-label="Increment value">
                    Increment
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())} aria-label="Decrement value">
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;
