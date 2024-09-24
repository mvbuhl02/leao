import { ExpenseProps } from "../../@types/expense";

export class ExpenseService{
    private expenses: ExpenseProps[]=[]

    public get(): ExpenseProps[]{
        return this.expenses
    }

    public set(newExpenses: ExpenseProps[]): void{
        this.expenses = newExpenses
    }
}