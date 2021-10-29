import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
import Header from "./Header";
import { useState, useEffect } from "react";

function Booklist() {
  return (
    <>
      <Header />
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} />; //we have used spread operator and also key props
        })}
      </section>
    </>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
