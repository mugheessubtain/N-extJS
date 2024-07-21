import Counter from "./counter";




export default function Home(){
  return(
     <>
     <h1>Counter App</h1>
    <Counter
    message={"Welcome "}
    count={10}
    />
    </>
  )
}