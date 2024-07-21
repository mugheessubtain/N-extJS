
"use client"

import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react"

type CounterType = {
    message: string,
    count: number
}

export default function Counter({ message, count }: CounterType) {
    const [userName, setUserName] = useState("");

    const [initCount, setInitCount] = useState(count);
    const ChangeHandler = (event: any) => {
        setUserName(event.target.value);
    };
    const addHandler = () => {
        setInitCount(initCount + 1)
    };
    const clearHandler = () => {
        setInitCount(count)
    }
    const removeHandler = () => {
        setUserName("")
    }
    const minusHandler = () => {
        if (initCount > 0) {
            setInitCount(initCount - 1)
        }
    };
    return (
        <>
            <h1>{message}{userName}</h1>
            {/* <h3>{initCount}</h3> */}
            UserName:
            <input
                type="text"
                value={userName}
                onChange={ChangeHandler}
            />
            <button onClick={removeHandler}>Remove All</button>
            {/* <h2>Welcome {userName}</h2> */}
            <h4>Here You can Add Numbers:</h4>
            <h2>{initCount}</h2>
            <button onClick={addHandler}>Add</button>
            <button onClick={minusHandler}>Minus</button>
            <button onClick={clearHandler}>Clear</button>
        </>
    )





}