import React, { useState } from "react";
import { ClientProps } from "../../@types/client";
import CreateClient from "../../components/client/createClient/createClient";
import { useClient } from "../../hooks/useClient";
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

enum ActionPages {
  entrar = "entrar",
  cadastrar = "cadastrar",
}

const Login = () => {
  const clientService = useClient();
  const clients = clientService.getClients();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<ActionPages>(
    ActionPages.entrar
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const renderComponentCreateClient = () => {
    return (
      <CreateClient
        createClient={(newClient: ClientProps) => {
          const id: number = clients.length + 1;
          newClient.id = id;
          clientService.set([...clients, newClient]);
          setCurrentPage(ActionPages.entrar);
        }}
      />
    );
  };

  const [getClients, setClients] = useState<ClientProps[]>([
    { id: 1, name: "Marcos", email: "marcos@email.com", password: "12345" },
    { id: 2, name: "João", email: "joao@email.com", password: "senha456" },
    { id: 3, name: "Ana", email: "ana@email.com", password: "senha789" },
    { id: 4, name: "Pedro", email: "pedro@email.com", password: "senha012" },
    { id: 5, name: "Carla", email: "carla@email.com", password: "senha345" },
    { id: 6, name: "Lucas", email: "lucas@email.com", password: "senha678" },
    { id: 7, name: "Fernanda", email: "fernanda@email.com", password: "senha901" },
    { id: 8, name: "Gustavo", email: "gustavo@email.com", password: "senha234" },
    { id: 9, name: "Beatriz", email: "beatriz@email.com", password: "senha567" },
    { id: 10, name: "Rafael", email: "rafael@email.com", password: "senha890" },
    { id: 11, name: "Juliana", email: "juliana@email.com", password: "senha1234" },
    { id: 12, name: "Marcelo", email: "marcelo@email.com", password: "senha5678" }
  ]);

  const renderVerification = () => {
    const client = clients.find(
      (client: ClientProps) =>
        client.email === email && client.password === password
    );
    console.log(clients);
    if (client) {
      alert(`Bem-vindo, ${client.name}!`);
      navigate("../dashboard");
    } else {
      setError("Email ou senha incorretos.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={renderVerification}>
                Entrar
              </button>
              {error && <p className="text-danger mt-2">{error}</p>}
              <button
                className="btn btn-secondary w-100 mt-3"
                onClick={() => setCurrentPage(ActionPages.cadastrar)}
              >
                Registre-se
              </button>
              {currentPage === ActionPages.cadastrar &&
                renderComponentCreateClient()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;