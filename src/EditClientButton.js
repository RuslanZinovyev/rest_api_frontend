import React from "react";
import * as ReactApi from "./ReactApi";

class EditClientButton extends React.Component {
  state = {
    age: "",
    name: "",
    email: "",
  };

  handleClickEdit = () => {
    this.setState(this.props.client);
  };

  handleChangeAge = (event) => {
    const value = event.target.value;
    this.setState({
      age: value,
    });
  };

  handleChangeName = (event) => {
    const value = event.target.value;
    this.setState({
      name: value,
    });
  };

  handleChangeEmail = (event) => {
    const value = event.target.value;
    this.setState({
      email: value,
    });
  };

  handleSubmit = () => {
    let id = this.props.client.id;
    let client = this.state;
    ReactApi.updateClient(id, client);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickEdit}
          type="button"
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target={"#edit" + this.props.client.id}
        >
          Edit
        </button>

        <div
          className="modal fade"
          id={"edit" + this.props.client.id}
          tabIndex="-1"
          aria-labelledby="exampleModalEdit"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalEdit">
                  Edit client
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAge1" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.handleChangeAge}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleChangeName}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </div>
                  <button
                    type="submit"
                    onSubmit={this.handleSubmit}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditClientButton;
