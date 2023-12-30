import React from 'react';
import Book from './Book';
import './App.css';

const App = () => {

const books = [
{ title: 'React Up and Running', author: 'Stoyan Stefanov', publishedYear: 2019 },
{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', publishedYear: 2008 },
{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', publishedYear: 2011 },
];

return (
<div className='App'>
  <h1>Book List</h1>
    <div className='book-container'>
    {books.map((book, index) => (

    <Book
      key={index}
      title={ book.title }
      author={book.author}
      publishedYear={book.publishedYear}
    />
    
    ))}
    </div>
</div>
);
};
export default App;