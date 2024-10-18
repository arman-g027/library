import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ inputValue, setInputValue, addBook, searchTerm, setSearchTerm }) => {
    const { Search } = Input;

    return (
        <div>
            <Input
                placeholder='Search books...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px' }} 
            />
        </div>
    );
};

export default SearchBar;
