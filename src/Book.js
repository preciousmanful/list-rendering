// Book.js
import React from 'react';

const Book = (props) => {
return (
<div className='book-item'>
    <h3>Title: {props.title}</h3>
    <p>Author: {props.author}</p>
    <p>Published Year: {props.publishedYear}</p>
    <hr />
</div>
);
};
export default Book;