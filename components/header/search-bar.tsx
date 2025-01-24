export default function SearchBar() {
    return (
        <div 
            className='ml-auto w-[240px] mr-3'
        >
            <input 
                id='search' 
                type="text" 
                name='search' 
                placeholder='Buscar produto'
                className='w-full'
            />
        </div>
    )
}