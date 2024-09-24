import React, { useContext, useEffect } from "react";
import { ClientContext } from "../../../context/ClientContext";
import { ClientProps } from "../../../@types/client";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"></link>
type ClientListProps = {
  getClients: ClientProps[];
  setClients: (clients: ClientProps[]) => void;
};

const ClientList = ({ getClients, setClients }: ClientListProps) => {
  useEffect(() => {}, [getClients]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Lista de Clientes</h2>
        <ul className="list-group list-group-flush">
          {getClients.map((client: ClientProps) => (
            <li key={client.id} className="list-group-item"> 
              <div className="d-flex w-100 justify-content-between"> 
                <div>
                  <strong>Nome:</strong> {client.name} <br />
                  <strong>Email:</strong> {client.email}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientList;