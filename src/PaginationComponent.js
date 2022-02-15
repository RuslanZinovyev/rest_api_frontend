import React from "react";
import * as ReactApi from "./ReactApi";

class PaginationComponent extends React.Component {
  loadClients = (requestedPage) => {
    ReactApi.getAllClients(requestedPage, this.props.size).then((response) => {
      this.props.onPaginatedClients(response.data.content, requestedPage);
    });
  };

  onClickNext = () => {
    this.loadClients(this.props.number + 1);
  };

  onClickPrevious = () => {
    this.loadClients(this.props.number - 1);
  };

  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li
            className={
              this.props.number <= 0 ? "page-item disabled" : "page-item"
            }
          >
            <a className="page-link" onClick={this.onClickPrevious}>
              Previous
            </a>
          </li>

          <li
            className="page-item"
            className={
              this.props.number + 1 >= this.props.totalPages
                ? "page-item disabled"
                : "page-item"
            }
          >
            <a className="page-link" href="#" onClick={this.onClickNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationComponent;
