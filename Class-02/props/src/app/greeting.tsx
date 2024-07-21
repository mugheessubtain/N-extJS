"use client"
type GreetingsType={
    greet:string,
    message:string,
    btnlabel:string,
    handlerFunc:()=> void
}
import MyButton from "./button"

// type GreetingsType={
//     greet:string,
//     message:string,
//     btnlabel:string
// }

export default function Greetings({greet,message,btnlabel,handlerFunc}:GreetingsType){
    return(
        <>
        <h1>{greet}</h1>
        <p>{message}</p>
        <MyButton
         label={btnlabel}
         clickHandler={handlerFunc}        
        />
        </>
    )
}