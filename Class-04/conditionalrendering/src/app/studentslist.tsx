"use client"

import { useState } from "react"

type StudentsProps = {
    name: string,
    rollNum: number
    feePaid: boolean
}
export default function StudentsList({ name, rollNum, feePaid }: StudentsProps) {

    const [error, setError] = useState({
        type: "error",
        errormsg: "You are not listed in our system."
    })

    const togglerHandler = () => {
        if (error.type === "error") {
            setError({
                type: "warning",
                errormsg: 'please wear your id card.'
            })
        }
        else {
            setError({
                type: "error",
                errormsg: "You are not listed in our system."
            });
        }
    }
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            <h1>Name: {name}</h1>
            <h2>Roll no:{rollNum}</h2>
            {
                feePaid ?
                    <p>Status: Your fee is paid</p> :
                    <p style={{ color: "red" }}>Status: Please Clear your dues</p>
            }
            <p
                style={
                    error.type === "error" ?
                        { backgroundColor: "yellow", color: "red" } :
                        { backgroundColor: "red", color: "yellow" }

                }>{error.errormsg}</p>
            <button onClick={togglerHandler}>Toggler Error</button>
        </div>
    )
}