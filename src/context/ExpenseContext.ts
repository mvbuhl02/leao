import React, { createContext } from "react";
import { ExpenseService } from "../utils/api/ExpenseService";

export const ExpenseContext = createContext<{expenseService:ExpenseService} | undefined>(undefined);