import { useEffect, useState } from "react";
import { ExpenseProps } from "../../@types/expense";
import ExpenseList from "../../components/expense/expenseList/expenseList";
import CreateExpense from "../../components/expense/createExpenses/createExpense";
import { useExpense } from "../../hooks/useExpense";
import IncomeList from "../../components/income/incomeList/incomeList";
import CreateIncome from "../../components/income/createIncome/createIncome";
import { useIncome } from "../../hooks/useIncome";
import { IncomeProps } from "../../@types/income";
import Balance from "../../components/balance/balance";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

enum ActionPages {
  escolha = "escolha",
  criarD = "criarD",
  listaD = "listaD",
  criarR = "criarR",
  listaR = "listaR",
}

function Dashboard() {
  const expenseService = useExpense();


  const [getExpenses, setExpenses] = useState<ExpenseProps[]>([
    { id: 1, value: 120.90, description: "Aluguel" },
    { id: 2, value: 35.50, description: "Conta de Internet" },
    { id: 3, value: 250.00, description: "Supermercado" },
    { id: 4, value: 80.30, description: "Combustível" },
    { id: 5, value: 65.00, description: "Restaurante" },
  ]);

  const [getIncomes, setIncomes] = useState<IncomeProps[]>([
    { id: 1, value: 3200.50, description: "Salário" },
    { id: 2, value: 500.00, description: "Freelance" },
    { id: 3, value: 150.20, description: "Dividendos" },
  ]);

  const incomeService = useIncome();

  const [getCurrentPage, setCurrentPage] = useState<ActionPages>(
    ActionPages.escolha
  );

  useEffect(() => {
    console.log({ getExpenses, Expense: expenseService.get() });
  }, [getExpenses]);

  useEffect(() => {
    console.log({ getIncomes, Income: incomeService.get() });
  }, [getIncomes]);

  const totalExpenses = getExpenses.reduce(
    (acc, expense) => acc + expense.value,
    0
  );
  const totalIncomes = getIncomes.reduce(
    (acc, income) => acc + income.value,
    0
  );
  const balance = totalIncomes - totalExpenses;

  const renderButtonExpenses = () => (
    <div className="d-flex justify-content-center mb-3">
      <button
        className="btn btn-secondary me-2"
        onClick={() => setCurrentPage(ActionPages.escolha)}
      >
        Voltar
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => setCurrentPage(ActionPages.criarD)}
      >
        Criar
      </button>
      <button
        className="btn btn-info"
        onClick={() => setCurrentPage(ActionPages.listaD)}
      >
        Minhas Despesas
      </button>
    </div>
  );

  const renderButtonIncomes = () => (
    <div className="d-flex justify-content-center mb-3">
      <button
        className="btn btn-secondary me-2"
        onClick={() => setCurrentPage(ActionPages.escolha)}
      >
        Voltar
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => setCurrentPage(ActionPages.criarR)}
      >
        Criar Receita
      </button>
      <button
        className="btn btn-info"
        onClick={() => setCurrentPage(ActionPages.listaR)}
      >
        Minhas Receitas
      </button>
    </div>
  );

  const renderExpenseComponent = () => {
    switch (getCurrentPage) {
      case ActionPages.criarD:
        return (
          <CreateExpense
            createExpense={(newExpense: ExpenseProps) => {
              const id: number = getExpenses.length + 1;
              newExpense.id = id;
              const tmpExpenses: ExpenseProps[] = [...getExpenses, newExpense];
              setExpenses(tmpExpenses);
              expenseService.set(tmpExpenses);
              setCurrentPage(ActionPages.listaD);
            }}
          />
        );

      case ActionPages.listaD:
        return (
          <ExpenseList
            getExpenses={getExpenses}
            setExpenses={(newList: ExpenseProps[]) => setExpenses(newList)}
          />
        );

      default:
        return (
          <ExpenseList
            getExpenses={getExpenses}
            setExpenses={(newList: ExpenseProps[]) => setExpenses(newList)}
          />
        );
    }
  };

  const renderIncomeComponent = () => {
    switch (getCurrentPage) {
      case ActionPages.criarR:
        return (
          <CreateIncome
            createIncome={(newIncome: IncomeProps) => {
              const id: number = getIncomes.length + 1;
              newIncome.id = id;
              const tmpIncomes: IncomeProps[] = [...getIncomes, newIncome];
              setIncomes(tmpIncomes);
              incomeService.set(tmpIncomes);
              setCurrentPage(ActionPages.listaR);
            }}
          />
        );

      case ActionPages.listaR:
        return (
          <IncomeList
            getIncomes={getIncomes}
            setIncomes={(newList: IncomeProps[]) => setIncomes(newList)}
          />
        );

      default:
        return (
          <IncomeList
            getIncomes={getIncomes}
            setIncomes={(newList: IncomeProps[]) => setIncomes(newList)}
          />
        );
    }
  };

  const choiseExpense = () => {
    return (
      <div>
        {renderButtonExpenses()}
        {renderExpenseComponent()}
      </div>
    );
  };

  const choiseIncome = () => {
    return (
      <div>
        {renderButtonIncomes()}
        {renderIncomeComponent()}
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <Balance expenses={getExpenses} incomes={getIncomes} />

      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-success me-2"
          onClick={() => setCurrentPage(ActionPages.criarR)}
        >
          Receita
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setCurrentPage(ActionPages.criarD)}
        >
          Despesa
        </button>
      </div>

      {getCurrentPage === ActionPages.criarR ||
      getCurrentPage === ActionPages.listaR
        ? choiseIncome()
        : null}
      {getCurrentPage === ActionPages.criarD ||
      getCurrentPage === ActionPages.listaD
        ? choiseExpense()
        : null}
    </div>
  );
}

export default Dashboard;