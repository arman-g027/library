import React, { useState } from 'react';
import { Checkbox, Button, Input } from 'antd';
import BookList from '../Booklist';
import SearchBar from '../Searchbar';
import './style.css';

const Head = () => {
    const [books, setBooks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isHidden, setIsHidden] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const addBook = () => {
        if (inputValue.trim() && !books.includes(inputValue.trim())) {
            setBooks((prevBooks) => [...prevBooks, inputValue.trim()]);
            setInputValue('');
        }
    };

    const deleteBook = (index) => {
        setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
    };

    const filteredBooks = books.filter(book =>
        book.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <div className='header'>
                <h2>Library</h2>
                <p>Books for Students</p>
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    addBook={addBook}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>

            <div className='book-list-container'>
                <BookList
                    books={filteredBooks}
                    deleteBook={deleteBook}
                    isHidden={isHidden}
                />
            </div>

            <div className='footer'>
                <Checkbox
                    checked={isHidden}
                    onChange={() => setIsHidden(!isHidden)}
                >
                    Hide all books
                </Checkbox>
                <div>
                    <Input
                        placeholder="Add a book..."
                        allowClear
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onPressEnter={addBook}
                        style={{ width: 250, marginRight: '10px' }}
                    />
                    <Button type="primary" onClick={addBook}>Add</Button>
                </div>
            </div>
        </div>
    );
};

export default Head;
