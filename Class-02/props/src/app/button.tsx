"use client"
type MyButtonType={
    label:string,
    clickHandler:()=> void
}
export default function MyButton({label,clickHandler}:MyButtonType){
    // const eventHandler=()=>{
    //     console.log("this is event handler")
    // }
    return <button onClick={clickHandler}>{label}</button>
}