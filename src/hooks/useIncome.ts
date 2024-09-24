import React, { useContext } from "react";
import { IncomeService } from "../utils/api/IncomeService";
import { IncomeContext } from "../context/IncomeContext";

export const useIncome=(): IncomeService =>{
    const context: {incomeService: IncomeService}| undefined = useContext(IncomeContext);

    if(!context){
        throw new Error("O seu usuário foi bloqueado! (kkk foi apennas um erro mas eu gosto de assutar o usuário!) favor abrir um ticket problema: erro no INCOME")
    }
    return context.incomeService
}