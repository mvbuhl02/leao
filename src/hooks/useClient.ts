import React, { useContext } from "react";
import { ClientService } from "../utils/api/ClientService";
import { ClientContext } from "../context/ClientContext";

export const useClient=(): ClientService =>{
    const context: {clientService: ClientService}| undefined = useContext(ClientContext);

    if(!context){
        throw new Error("O seu usuário foi bloqueado! (kkk foi apennas um erro mas eu gosto de assutar o usuário!) favor abrir um ticket problema: erro no Cliente")
    }
    return context.clientService
}