import React, { useContext } from "react";
import { ExpenseService } from "../utils/api/ExpenseService";
import { ExpenseContext } from "../context/ExpenseContext";

export const useExpense=(): ExpenseService =>{
    const context: {expenseService: ExpenseService}| undefined = useContext(ExpenseContext);

    if(!context){
          throw new Error("O seu usuário foi bloqueado! (kkk foi apennas um erro mas eu gosto de assutar o usuário!) favor abrir um ticket problema: erro no Expenese")
    }
    return context.expenseService
}