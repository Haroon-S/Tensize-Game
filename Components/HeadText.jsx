import React from 'react'

export default function HeadText()
{
    return (
        <div className="head pt-8 mx-auto  text-center">
            <h1 className=" font-extrabold text-gray-800 text-4xl mb-3">Tenzies</h1>
            <p className=" font-semibold text-gray-700 text-2xl">Roll until all dice are the same. 
                Click each die to freeze it at its current value between rolls.</p>
        </div>
    )
}