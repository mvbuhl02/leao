import React, { createContext } from "react";
import { ClientService } from "../utils/api/ClientService";

export const ClientContext = createContext<{clientService:ClientService} | undefined>(undefined);