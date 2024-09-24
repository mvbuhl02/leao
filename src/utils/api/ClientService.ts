import { ClientProps } from '../../@types/client';

export class ClientService {
    private clients: ClientProps[] = [];

    getClients() {
        return this.clients;
    }

    set(clients: ClientProps[]) {
        this.clients = clients;
    }
}