import { useState, useEffect } from 'react'
import HeadText from '../Components/HeadText'
import Dice from '../Components/Dice'
import './App.css'

function App() {
  


  const randomDice =() =>{
    let randomArray = []
    for (let x = 0; x < 10; x++)
        {
          randomArray.push({
            "id" : x,
            "value" : Math.floor(Math.random() * 6) + 1,
            "isClicked" : false
          }) 
        }
        return randomArray;
  } 

  const [diceValue, setDiceValue] = useState(randomDice())
  const [isWin, setIsWin] = useState(false)


  function allAreEqual(array) {
    if (array.length > 0) {
      const result = array.every(element => {
        if (element.value === array[0].value) {
          return true;
        }
      });
  
      return result;
    }
  
    return false;
  }
    useEffect(() => {
      let allSelected= diceValue.every(die => die.isClicked === true)
      let allDiceEqual = allAreEqual(diceValue)
      console.log(allSelected)
      console.log(allDiceEqual)
      allSelected && allDiceEqual ? setIsWin(true) : setIsWin(false)
      
    },[diceValue])



    function handleRoll()
    {
      isWin
      ? setDiceValue(randomDice()) :
      setDiceValue(prevDice => {
        return prevDice.map(die => {
          return die.isClicked ? die : {...die, value : Math.floor(Math.random() * 6) + 1}
        })
      })
      // setDiceValue(randomDice)

    }

    function handleDieSelect(id) {

      !isWin && setDiceValue(prevDice => {
            return prevDice.map(die => {
                return die.id === id ? {...die, isClicked: !die.isClicked} : die
            })
        })
    }

    const diceElement = diceValue.map((dice, index) =>{
      return (
        <Dice key = {index}
        value = {dice.value}
        id = {index}
        isSelected = {dice.isClicked}
        select = {handleDieSelect}
        />
        )
      })


  return (
    <div className="board bg-slate-100 text-slate-800 rounded-2xl drop-shadow-xl ">
      <HeadText />
    <div className='dice mx-auto text-center grid grid-cols-5 gap-x-7 gap-y-10 mt-12 '>       
      {diceElement}
    </div>
      <button onClick={handleRoll} type="button" className=" mt-10 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold drop-shadow-xl rounded-lg text-3xl px-10 py-3 mb-2 ">{isWin ? "Reset" : "Roll"}</button>
    </div>
  )
}

export default App
