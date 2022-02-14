import React from "react";
import * as ReactApi from "./ReactApi";

class CreateClientButton extends React.Component {
  state = {
    age: "",
    name: "",
    email: "",
  };

  clearState = () => {
    this.setState({
      age: "",
      name: "",
      email: "",
    });
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
    ReactApi.addClient(this.state);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#create"
        >
          Create client
        </button>

        <div
          className="modal fade"
          id="create"
          tabIndex="-1"
          aria-labelledby="exampleModalSignup"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalSignup">
                  Sign up
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.clearState}
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
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default CreateClientButton;
