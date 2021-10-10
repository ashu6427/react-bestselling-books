import React from "react";

function Book(props) {
  const clickHandler = () => {
    alert("Thank you for buying this book");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={props.img} alt="pics" className="image" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy
      </button>
      &nbsp;&nbsp;&nbsp;
      <button type="button" onClick={() => complexExample(props.author)}>
        Add to cart
      </button>
    </article>
  );
}

export default Book;
