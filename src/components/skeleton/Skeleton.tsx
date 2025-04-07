const Skeleton = () => {
    return Array(4)
        .fill(null)
        .map((_, index) => (
            <div key={index} className='w-full cursor-pointer relative'>
                <div className='relative p-4 bg-[var(--card)] rounded h-[300px] overflow-hidden group'>
                    <div className='w-full h-36 bg-[var(--card)] animate-pulse rounded'></div>
                </div>

                <div className='relative p-4 bg-transparent'>
                    <h3 className='text-base font-medium bg-[var(--card)] animate-pulse w-28 h-4 mb-2'></h3>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='bg-[var(--card)] animate-pulse w-12 h-4'></span>
                        <span className='bg-[var(--card)] animate-pulse w-16 h-4'></span>
                    </div>
                    <div className='flex items-center mt-1 text-yellow-500 animate-pulse'>
                        <div className='w-12 h-4 bg-[var(--card)] animate-pulse'></div>
                    </div>
                </div>
            </div>
        ));
};

export default Skeleton;
