import BaseIcon from '../icons/base-icon';
import CategoriesIcon from '../icons/categories-icon';

export default function Categories({categories}) {

    return (
        <nav className='categories'>
            <div className="categories-menu holder-dropdown">
                <span className='flex items-center'>
                    <BaseIcon
                        width={15}
                        height={11}
                        fill='white'
                        className='mr-2'
                    >
                        <CategoriesIcon />
                    </BaseIcon>
                    Categorias
                </span>

                <div className="dropdown all-categories">
                    {categories.map(category => {
                        return (
                            <div 
                                className='dropdown-item' 
                                key={category.id}
                            >
                                <a href={category.url_path}>{category.name}</a>
                                {category.children.data.length > 0 && 
                                    <div className='holder-sub-dropdown'>
                                        {category.children.data.map(subcategory => {
                                            <div className="subdropdown-item">{ subcategory.name }</div>
                                        })}
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
            {categories.map(category => {
                return (
                    <div 
                        className='category-item' 
                        key={category.id}
                    >
                        <a href={category.url_path}>{category.name}</a>
                    </div>
                );
            })}
        </nav>
    )
}