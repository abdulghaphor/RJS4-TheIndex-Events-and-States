import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors
  };
  toggle = author => {
    if (author) {
      this.setState({
        currentAuthor: author
      });
    } else {
      this.setState({
        currentAuthor: null
      });
    }
  };
  getView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          filterAuthors={this.filterAuthors}
          toggle={this.toggle}
          authors={this.state.authors}
        />
      );
    }
  };
  filterAuthors = query => {
    this.setState({
      authors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar toggle={this.toggle} />
          </div>

          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}
export default App;
