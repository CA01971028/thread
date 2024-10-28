import NewThread from "./NewThread";

const New = () => {
    return (
        <>
            <div className='min-w-max h-full bg-slate-200'>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl py-8">スレッドの追加</div>
                    <NewThread/>
                </div>
            </div>
        </>
        
    );
}

export default New;