import { IncomeProps } from "../../@types/income";

export class IncomeService{
    private incomes: IncomeProps[]=[]

    public get(): IncomeProps[]{
        return this.incomes
    }

    public set(newIncomes: IncomeProps[]): void{
        this.incomes = newIncomes
    }
}