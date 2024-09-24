import React, { useEffect, useState } from 'react';
import { ExpenseProps } from '../../../@types/expense';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

type ExpenseListProps = {
  getExpenses: ExpenseProps[];
  setExpenses: (expenses: ExpenseProps[]) => void;
};

const ExpenseList = ({ getExpenses, setExpenses }: ExpenseListProps) => {
  const [editingExpense, setEditingExpense] = useState<ExpenseProps | null>(null);
  const [newValue, setNewValue] = useState(0);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setNewValue(editingExpense.value);
      setNewDescription(editingExpense.description);
    }
  }, [editingExpense]);

  const deleteExpense = (id: number) => {
    const updatedExpenses = getExpenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const startEditing = (expense: ExpenseProps) => {
    setEditingExpense(expense);
  };

  const saveEdit = () => {
    if (editingExpense) {
      const updatedExpenses = getExpenses.map((expense) =>
        expense.id === editingExpense.id
          ? { ...expense, value: newValue, description: newDescription }
          : expense
      );
      setExpenses(updatedExpenses);
      setEditingExpense(null);
      setNewValue(0);
      setNewDescription('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Minhas Despesas</h1>
        <ul className="list-group list-group-flush">
          {getExpenses.map((expense) => (
            <li key={expense.id} className="list-group-item">
              {editingExpense && editingExpense.id === expense.id ? (
                <div className="mb-3">
                  <p>Despesa {expense.id}</p>
                  <div className="mb-3">
                    <label htmlFor={`value-${expense.id}`} className="form-label">Valor</label>
                    <input
                      type="number"
                      className="form-control"
                      id={`value-${expense.id}`}
                      value={newValue}
                      onChange={(e) => setNewValue(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`description-${expense.id}`} className="form-label">Destino</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`description-${expense.id}`}
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary" onClick={saveEdit}>
                    Salvar
                  </button>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      onClick={() => deleteExpense(expense.id)}
                    />
                    ID: {expense.id} R$ {expense.value} <br />
                    PARA: {expense.description}
                  </div>
                  <div>
                    <button className="btn btn-secondary btn-sm me-2" onClick={() => startEditing(expense)}>
                      Editar
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>
                      Excluir
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;