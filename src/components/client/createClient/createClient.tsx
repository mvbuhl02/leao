import React, { useState, useEffect } from "react";
import { ClientProps } from "../../../@types/client";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

type CreateClientProps = {
  createClient: (client: ClientProps) => void;
};

const CreateClient = ({ createClient }: CreateClientProps) => {
  const [getClient, setClient] = useState<ClientProps>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {}, [getClient]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Criar Cliente</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Seu nome"
              onChange={(elemento) =>
                setClient({ ...getClient, name: elemento.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="meu@email.com"
              onChange={(elemento) =>
                setClient({ ...getClient, email: elemento.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              onChange={(elemento) =>
                setClient({ ...getClient, password: elemento.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => createClient(getClient)}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClient;