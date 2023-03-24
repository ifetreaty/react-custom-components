import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  function showFormHandler() {
    setShowForm(true);
  }

  function cancelFormHandler() {
    setShowForm(false);
  }

  let formContent = <button onClick={showFormHandler}>Add New Expense</button>;

  if (showForm) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelFormHandler}
      />
    );
  }
  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
