import React from 'react'
let arr=[
    {name:"satyam",branch:"CSE"},
    {name:"aman",branch:"CSE(DS)"},
    {name:"sachin",branch:"CSE(AI)"},
    {name:"sachin",branch:"CSE(AI)"},
    {name:"sachin",branch:"CSE(AI)"}
]
export default function Demo() {
  return (
    <>
    {
    arr.map(
        (obj)=>{
            return(
            <p>Your Name is {obj.name} . And your branch is {obj.branch}</p>
            )
        }
        )
    }
        </>
  )
}
