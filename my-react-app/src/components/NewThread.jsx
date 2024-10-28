import React, { useState } from 'react';

const NewThread = () => {
    const [inputValue, setInputValue] = useState('');

    const submit = () => {
        alert(inputValue); // アラートで表示
        setInputValue(''); // フィールドをクリアする場合
    }

    return (
       <>
            <input 
                type="text" 
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 w-3/4" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            /><br />
            <button 
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-10 mb-80" 
                onClick={submit}
            >
                追加
            </button>
       </>
    )
}

export default NewThread;
