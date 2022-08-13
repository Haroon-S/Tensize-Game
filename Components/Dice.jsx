import React from 'react'

export default function Dice(props)
{
    // const dice = [1,1,1,1,1,1,1,1,1,1]

    // const randomDice =() => Math.floor(Math.random() * 6);

    // const diceElement = dice.map(dice =>{
    //     return (
    //         <div key={dice} className=" h-16 bg-white hover:bg-slate-200 text-zinc-900 text-4xl font-extrabold drop-shadow-xl text-center rounded-lg cursor-pointer ">
    //             <h1 className="text-center mt-3">{dice + randomDice()}</h1>
    //         </div>
    //     )
    // })

    return (
        <div 
        onClick={() => props.select(props.id)} 
        className={" h-16 text-zinc-900 text-4xl font-extrabold drop-shadow-xl text-center rounded-lg cursor-pointer " + (props.isSelected ? "bg-green-400" : "bg-white hover:bg-slate-200")}>
                <h1 className="text-center mt-3">{props.value}</h1>
        </div>
    )
}