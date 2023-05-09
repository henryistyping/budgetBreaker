import React, { useState } from 'react'

export default function ExpensesCalc() {
  const [budgetValue, setBudgetValue] = useState({
    expense: '',
    income: '',
    balance: '',
  })

  function handleChange(e) {
    setBudgetValue({
      ...budgetValue,
      [e.target.name]: e.target.value
    });
  }

  function netBalanceCalculation() {
    setBudgetValue({
      ...budgetValue,
      balance: budgetValue.income - budgetValue.expense,
    })
  }

  return (
    <div>
      <div className="Input_container">
        <div className="Left">
          <input
            name="expense"
            value={budgetValue.expense}
            onChange={handleChange}
            placeholder="expenses"
          />
        </div>
        <div className="Right">
          <input
            name="income"
            value={budgetValue.income}
            onChange={handleChange}
            placeholder='income'
          ></input>
        </div>
      </div>
      <button
        onClick={netBalanceCalculation}>Calculate net balance</button>
      <div className="balance_container">
        <p>Your net balance is:</p>
        <h3>${budgetValue.balance === '' ? 0 : budgetValue.balance}</h3>
      </div>
    </div>
  );
}


