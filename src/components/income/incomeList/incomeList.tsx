import React, { useState, useEffect } from "react";
import { IncomeProps } from "../../../@types/income";

type IncomeListProps = {
  getIncomes: IncomeProps[];
  setIncomes: (incomes: IncomeProps[]) => void;
};

const IncomeList = ({ getIncomes, setIncomes }: IncomeListProps) => {
  const [editingIncome, setEditingIncome] = useState<IncomeProps | null>(null);
  const [newValue, setNewValue] = useState(0);
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    if (editingIncome) {
      setNewValue(editingIncome.value);
      setNewDescription(editingIncome.description);
    }
  }, [editingIncome]);

  const deleteIncome = (id: number) => {
    const updatedIncomes = getIncomes.filter((income) => income.id !== id);
    setIncomes(updatedIncomes);
  };

  const startEditing = (income: IncomeProps) => {
    setEditingIncome(income);
  };

  const saveEdit = () => {
    if (editingIncome) {
      const updatedIncomes = getIncomes.map((income) =>
        income.id === editingIncome.id
          ? { ...income, value: newValue, description: newDescription }
          : income
      );
      setIncomes(updatedIncomes);
      setEditingIncome(null);
      setNewValue(0);
      setNewDescription("");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Minhas Receitas</h1>
        <ul className="list-group list-group-flush">
          {getIncomes.map((income) => (
            <li key={income.id} className="list-group-item">
              {editingIncome && editingIncome.id === income.id ? (
                <div className="mb-3">
                  <p>Receita {income.id}</p>
                  <div className="mb-3">
                    <label htmlFor={`value-${income.id}`} className="form-label">
                      Valor
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id={`value-${income.id}`}
                      value={newValue}
                      onChange={(e) => setNewValue(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor={`description-${income.id}`}
                      className="form-label"
                    >
                      Fonte
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`description-${income.id}`}
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
                      onClick={() => deleteIncome(income.id)}
                    />
                    ID: {income.id} R$ {income.value} <br />
                    DE: {income.description}
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => startEditing(income)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteIncome(income.id)}
                    >
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

export default IncomeList;