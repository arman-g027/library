import React from 'react';
import { Button } from 'antd';

import './index.css';

const BookList = ({ books, deleteBook, isHidden }) => {
    return (
        <div className='books'>
            <h2 className="title">Books to Read</h2>
            {!isHidden && (
                <ul>
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="name">{book}</span>
                                <span
                                    className="delete"
                                    onClick={() => deleteBook(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Button> Delete </Button>
                                </span>
                            </li>
                        ))
                    ) : (
                        <li>No books found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default BookList;
