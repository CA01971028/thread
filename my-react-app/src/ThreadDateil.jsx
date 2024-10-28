import Header from './components/Header'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const ThreadDateil = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const { thread_id } = useParams();
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
                if (!res.ok){
                    throw new Error('サーバーサイドのエラーです');
                }
                const result = await res.json();
                setData(result);
            }catch(err){
                console.log('サーバーサイドでエラーが発生しました',err);
                setError(err);
            }
        }
        fetchData()
    },[])
    return (
        <div>
           <Header />
           <div className="min-w-max h-full bg-slate-200">
                <div></div>
            <p>スレッドID: {thread_id}</p>
            {/* ここにスレッドの詳細情報を表示するロジックを追加 */}
           </div>
           
        </div>
    );
}

export default ThreadDateil;