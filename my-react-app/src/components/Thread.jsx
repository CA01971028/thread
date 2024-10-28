import Card from './Card'
const Thread = () => {
    return (
        <div className='min-w-max h-full bg-slate-200'>
            <div className="text-center">
                <div className="text-3xl md:text-4xl py-8">新着スレッド</div>
                <Card />
            </div>
        </div>
        
    );
}

export default Thread;