import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'


const Transaction = ({transaction }) => {
  const  { deleteTranction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
    
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTranction(transaction.id)} className='delete-btn'>x</button>

            </li>
  )
}

export default Transaction