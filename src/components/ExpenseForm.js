import React from 'react'
import {MdSend} from "react-icons/md"


const ExpenseForm = ({ charge, amount, handleCharge, handleAmount,  handleSubmit, edit }) => {
   
    return (
        <form onSubmit={handleSubmit} form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Gasto</label>
                    <input value={charge} onChange={handleCharge} type="text" className="form-control" id="charge" name="charge" placeholder="Your Expenses Today..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Cantidad</label>
                    <input value={amount}  onChange={handleAmount} type="number" className="form-control" id="amount" name="amount" placeholder="Amount to Spend..."/>
                </div>
            </div>
            <button type="submit" className="btn btn-warning">{edit ? "Edit" : "Submit"} <MdSend /></button>
        </form>
    )
}

export default ExpenseForm
