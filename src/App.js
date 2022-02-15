import React from "react";
import * as ReactApi from "./ReactApi";
import CreateClientButton from "./CreateClientButton";
import EditClientButton from "./EditClientButton";
import DeleteClientButton from "./DeleteClientButton";
import NavBar from "./NavBar";
import PaginationComponent from "./PaginationComponent";

class App extends React.Component {
  state = {
    clients: [],
    totalPages: 0,
    number: 0,
    size: 4,
  };

  onPaginatedClients = (pageClients, number) => {
    this.setState({
      clients: pageClients,
      number: number,
    });
  };

  componentDidMount() {
    ReactApi.getAllClients(this.state.number, this.state.size).then(
      (response) => {
        console.log(response);
        this.setState({
          clients: response.data.content,
          totalPages: response.data.totalPages,
        });
      }
    );
  }

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      ReactApi.getAllClients(this.state.number, this.state.size).then(
        (response) => {
          this.setState({
            clients: response.data.content,
            totalPages: response.data.totalPages,
          });
        }
      );
    }
  }

  render() {
    const displayClients = this.state.clients.map((client) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.age}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <EditClientButton client={client} />
              <DeleteClientButton clientId={client.id} />
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <NavBar />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>age</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>{displayClients}</tbody>
        </table>
        <CreateClientButton />
        <br />
        <PaginationComponent
          onPaginatedClients={this.onPaginatedClients}
          totalPages={this.state.totalPages}
          size={this.state.size}
          number={this.state.number}
        />
      </div>
    );
  }
}

export default App;
