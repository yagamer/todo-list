import React from 'react'
import Item from "../components/ExpenseItem"
import {MdDelete} from "react-icons/md"

const ExpenseList = ({ expenses, setExpenses, handleEdith, handleDelete}) => {


    return (
        <>
            <ul className="list">
                {expenses.map((expense)=>{
                    return <Item key={expense.id} id={expense.id} charge={expense.charge} amount={expense.amount} handleEdith={handleEdith} handleDelete={handleDelete} />
                })}
            </ul>
            {expenses.length > 0 && <button className="btn btn-warning" onClick={()=>{
                setExpenses([])
            }}>Clear <MdDelete /></button>}
        </>
    )
}

export default ExpenseList
