import React, { createContext } from "react";
import { IncomeService } from "../utils/api/IncomeService";

export const IncomeContext = createContext<{incomeService: IncomeService} | undefined>(undefined);