import request from '@/lib/request';

export default async function Categories({categories}) {
    console.log(categories);

    return (
        <div>
            {categories.map(category => {
                return (
                    <div key={category.id}>{category.name}</div>
                );
            })}
        </div>
    )
}