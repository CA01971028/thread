import React, { useState } from 'react';

const NewThread = () => {
    const [inputValue, setInputValue] = useState('');

    const submit = async () => {
        if (!inputValue.trim()) {
            alert('何か入力してください！');
            return;
        }

        try {
            const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ title: inputValue }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`エラー: ${errorData.ErrorMessageJP || '不明なエラー'}`);
                return;
            }

            const result = await response.json();
            alert(`スレッドが作成されました！ ID: ${result.id}, タイトル: ${result.title}`);
            setInputValue(''); 
        } catch (error) {
            console.error('エラーが発生しました:', error);
            alert('サーバーエラーが発生しました。');
        }
    };

    return (
       <>
            <input 
                type="text" 
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 w-3/4" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            /><br />
            <button 
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-10 mb-36" 
                onClick={submit}>
                追加
            </button>
            <div className="pb-32">
                <a href="/"><button 
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-3" 
                > 
                戻る
                </button></a>
            </div>
       </>
    );
};

export default NewThread;
