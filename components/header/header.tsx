import request from '@/lib/request';
import Image from 'next/image';
import SearchBar from './search-bar';
import "./styles.css";
import AccountIcon from '../icons/account-icon';
import MiniCart from './mini-cart';
import BaseIcon from '../icons/base-icon';
import Categories from './categories';

export default async function Header() {
    const { data: menuInfos } = await request.get('/whois/minhasuperloja');

    return (
        <header>
            <div className='container flex items-center h-[114px] '>
                <Image
                    className='w-full max-w-[150px] max-h-[150px]'
                    width={150}
                    height={150}
                    src={menuInfos.data.logo_url}
                    alt='Logo'
                />
                <Categories categories={menuInfos.data.categories}/>
                <SearchBar />
                <BaseIcon
                    width="16"
                    height="18"
                >
                    <AccountIcon />
                </BaseIcon>
                <MiniCart />
            </div>
        </header>
    )
}