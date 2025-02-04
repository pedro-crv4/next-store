import BaseIcon from '../icons/base-icon';
import SearchIcon from '../icons/search-icon';

export default function SearchBar() {
    return (
        <div 
            className='holder-search-bar ml-auto w-[240px] mr-3 relative'
        >
            <input 
                id='search' 
                type="text" 
                name='search' 
                placeholder='Buscar produto'
                className='w-full'
            />
            <BaseIcon
                width={16}
                height={18}
            >
                <SearchIcon />
            </BaseIcon>
        </div>
    )
}