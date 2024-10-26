import React, { useEffect, useState } from 'react';
import './App.css';
import mappings from './mappings.json'
import './fixed-button.css'; // 

function App() {
    const [index, setIndex] = useState(window.localStorage.getItem('index') || '1')
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        window.localStorage.setItem('index', (parseInt(index)).toString())
    }, [index])


    const handleClick = () => {
        setClicked(true)
        const map = mappings[parseInt(index) - 1]
        const nextIndex = (parseInt(index) + 1).toString()
        if (map) {
            const url = map.link
            setIndex(nextIndex)
            // setNext(nextIndex)
            window.location.href = url
        } else {
            setIndex(nextIndex)
            // setNext(nextIndex)
            const encodedSearchTerm = encodeURIComponent('scs-02 examtopics ' + index);
            const luckyUrl = `https://www.google.com/search?q=${encodedSearchTerm}&btnI`;
            window.location.href = luckyUrl
        }
    }

    
    return (
        <>
            <div>
                <h3>SCS-C02 examtopics</h3>
            </div>
            <hr />
            <div>
                <input
                    type="number"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            handleClick();
                        }
                    }}
                />
                <button
                    id='button'
                    onClick={handleClick}
                >Go</button>
            </div>
            <button
                className="fixed-button"
                onClick={handleClick}
            >
               Go
            </button>
        </>
    );
}


export default App;
