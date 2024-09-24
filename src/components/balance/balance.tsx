import React from 'react';
import { ExpenseProps } from '../../@types/expense';
import { IncomeProps } from '../../@types/income';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"></link>

type BalanceProps = {
  expenses: ExpenseProps[];
  incomes: IncomeProps[];
};

const Balance = ({ expenses, incomes }: BalanceProps) => {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.value, 0);
  const totalIncomes = incomes.reduce((acc, income) => acc + income.value, 0);

  const balance = totalIncomes - totalExpenses;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Verificar o saldo</h2>
        <p className="card-text display-4">
          R$ {balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Balance;