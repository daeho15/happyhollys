import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('1');
    const handleNextSearch = () => {
        setSearchTerm((parseInt(searchTerm)+1).toString())
        const encodedSearchTerm = encodeURIComponent('scs-02 examtopics ' + searchTerm);
        const luckyUrl = `https://www.google.com/search?q=${encodedSearchTerm}&btnI`;
        window.open(luckyUrl, '_blank');
    };
    return (
        <>
            <div>
                <h3>지금 : SCS-C02 examtopics {searchTerm}</h3>
            </div>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <button onClick={handleNextSearch}>GOGO</button>
            </div>
        </>
    );
}


export default App;
