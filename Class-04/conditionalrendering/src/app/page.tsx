import StudentsList from "./studentslist";




const students = [
  {
    name: "mughees",
    rollNum: 2643,
    feePaid: true,
  },
  {
    name: "mutahir",
    rollNum: 2644,
    feePaid: false,
  },
  {
    name: "zaini",
    rollNum: 2645,
    feePaid: true,
  },
  {
    name: "tari",
    rollNum: 2666,
    feePaid: false,
  },
];


export default function Home(){
  return(
    students.map(({name,rollNum,feePaid})=>(
      <StudentsList
      name={name}
      rollNum={rollNum}
      feePaid={feePaid}/>
    ))
  )
}