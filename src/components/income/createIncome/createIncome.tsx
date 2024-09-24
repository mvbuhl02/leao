import React, { useEffect, useState } from "react";
import { IncomeProps } from "../../../@types/income";

type CreateIncomeProps = {
  createIncome: (income: IncomeProps) => void;
};

const CreateIncome = ({ createIncome }: CreateIncomeProps) => {
  const [getIncome, setIncome] = useState<IncomeProps>({
    id: 0,
    value: 0,
    description: "",
  });

  useEffect(() => {}, [getIncome]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Criando Receita</h2>

        <div className="mb-3">
          <label htmlFor="value" className="form-label">
            Valor
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="0,00"
            onChange={(number) =>
              setIncome({ ...getIncome, value: Number(number.target.value) })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mais ...
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Fonte de Renda"
            onChange={(elemento) =>
              setIncome({ ...getIncome, description: elemento.target.value })
            }
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => createIncome(getIncome)}
        >
          Salvar Receita
        </button>
      </div>
    </div>
  );
};

export default CreateIncome;