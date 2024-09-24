import React, { useEffect, useState } from 'react';
import { ExpenseProps } from '../../../@types/expense';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

type CreateExpenseProps = {
  createExpense: (expense: ExpenseProps) => void;
};

const CreateExpense = ({ createExpense }: CreateExpenseProps) => {
  const [getExpense, setExpense] = useState<ExpenseProps>({ id: 0, value: 0, description: '' });

  useEffect(() => {}, [getExpense]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Despesa ...</h2>

        <div className="mb-3">
          <label htmlFor="value" className="form-label">Valor</label>
          <input
            type="number"
            className="form-control"
            placeholder="0,00"
            onChange={(number) => setExpense({ ...getExpense, value: Number(number.target.value) })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder='Destino do dinheiro'
            onChange={(elemento) => setExpense({ ...getExpense, description: elemento.target.value })}
          />
        </div>

        <button className="btn btn-primary" onClick={() => createExpense(getExpense)}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default CreateExpense;