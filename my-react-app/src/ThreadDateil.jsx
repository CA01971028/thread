import Header from './components/Header';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ThreadDetail = () => {
    const [data, setData] = useState([]);
    const [serch, setSerch] = useState([]);
    const [error, setError] = useState(null);
    const [serchError, setSerchError] = useState(null);
    const { thread_id } = useParams();
    const [inputValue, setInputValue] = useState('');

    const submit = async () => {
        if (!inputValue.trim()) {
            alert('何か入力してください！');
            return;
        }
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post: inputValue })
            });

            if (!response.ok) {
                const errorData = await response.json(); // エラー内容を取得
                alert(`エラー: ${errorData.ErrorMessageJP || '不明なエラー'}`);
                return;
            }

            const result = await response.json();
            alert(`スレッドに詳細な内容が追加されました!: 内容 ${result.post}`);
            setInputValue(''); // 入力フィールドをクリア
        } catch (error) {
            console.error('エラーが発生しました', error);
            alert('サーバーエラーが発生した');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await res.json();
                setData(result);
            } catch (err) {
                console.log('サーバーサイドでエラーが発生しています', err);
                setError(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
                if (!res.ok) {
                    throw new Error('サーバーサイドのエラーです');
                }
                const result = await res.json();
                setSerch(result.posts || []); // posts配列をセット
            } catch (err) {
                console.log('サーバーサイドでエラーが発生しました', err);
                setSerchError(err.message);
            }
        }
        fetchData();
    }, [inputValue]);

    const title = data.map((thread) => {
        if (thread.id === thread_id) {
            return thread.title;
        }
        return null;
    });

    return (
        <div>
            <Header />
            <div className="min-w-max min-h-lvh bg-slate-200 p-4">
                <div className="text-4xl pl-10">{title[0] || 'タイトルが見つかりませんでした'}</div>
                <div className='md:flex md:flex-row-reverse'>
                    <div className='md:basis-11/12'>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 w-2/4 my-3 mx-auto block"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        /><br />
                        <button
                            className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2 mb-10 block mx-auto"
                            onClick={submit}>
                            追加
                        </button>
                    </div>
                    
                    <div className='md:basis-11/12'>
                        {serch.map((post) => (
                            <div key={post.id} className="bg-white h-16 w-2/4 mx-auto md:h-auto text-center text-3xl my-3 py-3">
                                {post.post}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreadDetail;
