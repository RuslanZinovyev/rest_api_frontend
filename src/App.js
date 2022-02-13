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
  };

  componentDidMount() {
    ReactApi.getAllClients().then((response) => {
      this.setState({
        clients: response.data,
      });
    });
  }

  componentDidUpdate() {
    ReactApi.getAllClients().then((response) => {
      this.setState({
        clients: response.data,
      });
    });
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
        <PaginationComponent />
      </div>
    );
  }
}

export default App;
