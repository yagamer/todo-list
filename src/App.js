import React, {useState} from 'react'
import "./App.css"
import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"
import Alert from "./components/Alert"
import { v4 as uuid } from "uuid"

const initialExpenses = [


]

const App = () => {

    const [expenses , setExpenses] = useState(initialExpenses);

    const [charge , setCharge] = useState("");
    const [amount, setAmount] = useState("");
    
    const [alert , setAlert] = useState(false)

    //edit
    const [edit, setEdit] =  useState(false)
    //id
    const [id, setId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(charge !== "" & amount > 0) {
            if(edit){
                let tempExpenses = expenses.map((item)=>{
                    return item.id === id? {...item, charge, amount} :item
                })
                setExpenses(tempExpenses)
                setEdit(false)
            } else {
                 setExpenses([...expenses, {id: uuid(), charge: charge, amount: amount}])
            } 
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
        }
        
        e.target.reset()
        setCharge("")
        setAmount(0)
        
    }
 
    const handleCharge = (e) => {
        setCharge(e.target.value)
    }

    const handleAmount = (e) => {
        let num = Number(e.target.value)
        
        setAmount(num)
    }

    // handle edith delete 

    let handleDelete = (id) => {
         
        let newExpenses = expenses.filter((item)=> item.id !== id)
        setExpenses(newExpenses)
    }

    let handleEdith = (id) => {
         let expense = expenses.find((elem)=> elem.id === id)
         let {charge , amount} = expense
        
         setCharge(charge)
         setAmount(amount)
         setEdit(true)
         setId(id)
    }

    console.log(expenses)
    return (
        <>
           {alert && <Alert />}
            <h1 className="title">Gastos Application</h1>
            <div className="form-app">
                <ExpenseForm  charge={charge} amount={amount }handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit} /> 
            </div>

            <main className="App">
     
                <ExpenseList expenses={expenses} setExpenses={setExpenses} handleDelete={handleDelete} handleEdith={handleEdith}/>
            </main>
            <div className="total-container">
                    <h1>Total: <span className="total"> ${expenses.reduce((acc , curr)=>{
                        return acc += curr.amount 
                        },0)} </span>Pesos</h1>
             </div> 
             <div className="footer">
                <h2 > created by Abraham Jaimes </h2>  
             </div>
        </>
    )
}

export default App
