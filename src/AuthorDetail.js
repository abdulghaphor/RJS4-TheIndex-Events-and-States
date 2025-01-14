import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{`${author.first_name} ${author.last_name} `}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail"
            alt={`${author.first_name} ${author.last_name} `}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {author.books.map(book => (
              <tr>
                <td>{book.title}</td>
                <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
                <td>
                  <button
                    className="btn"
                    style={{ backgroundColor: book.color }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
