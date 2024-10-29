import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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

    return (
        <div className="flex flex-col ">
            {error ? (
                <div className="text-red-500">エラー: サーバーサイトのエラーです</div>
            ) : (
                data.map((thread) => (
                    <Link key={thread.id} to={`/threads/${thread.id}`}>
                        <div className="bg-white sm:h-auto md:h-20 w-2/4 mx-auto rounded-lg mb-4 p-4 hover:bg-blue-500">
                            <div>{thread.title}</div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}

export default Card;
