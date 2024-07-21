"use client"





import Greetings from "./greeting";


export default function Home() {

  const signup = () => {
    console.log("This is signup funtion");
  }
  const login = () => {
    console.log("This is login funtion");
  }
  const forgetPassword = () => {
    console.log("This is forget Password Function");

  }
  return (
    <>
      <Greetings
        greet={"Assalamaalikum"}
        message="Kia haal haa."
        btnlabel="signup"
        handlerFunc={signup}
      />
      <Greetings
        greet={"Welcome"}
        message="How are you?"
        btnlabel="login"
        handlerFunc={login}
      />
      <Greetings
        greet={"Hello"}
        message="How may i help you."
        btnlabel="forget password"
        handlerFunc={forgetPassword}
      />
    </>
  )
}