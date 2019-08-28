import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

function AuthorsList(props) {
  let authors = props.authors;

  const authorCards = authors.map(author => (
    <AuthorCard
      toggle={props.toggle}
      key={author.first_name + author.last_name}
      author={author}
    />
  ));

  return (
    <div className="authors">
      <SearchBar filterAuthors={props.filterAuthors} />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
