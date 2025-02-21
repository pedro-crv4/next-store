'use client';

import { useState } from 'react';
import BaseIcon from '../icons/base-icon';
import CartIcon from '../icons/cart-icon';
import { Transition } from '@headlessui/react';
import YButton from '../generic/YButton/y-button';

export default function MiniCart() {
    const [isOpen, setIsOpen] = useState(false);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <div className='relative'>
            <div 
                className="holder-cart flex"
                onMouseEnter={openCart}
                onMouseLeave={closeCart}
            >
                <BaseIcon
                    width="23"
                    height="21"
                    className="cart-icon"
                >
                    <CartIcon />
                </BaseIcon>

                <div className='cart-quantity text-center bg-primary w-[24px] h-[24px] rounded-full ml-1'>0</div>
            </div>

            <Transition 
                show={true}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="dropdown dropdown-cart">
                    <div className="products-cart">
                        <div className="cart-header"></div>
                        <div className="products-list"></div>
                        <YButton
                            variation='primary'
                        >
                            Ver carrinho
                        </YButton>
                    </div>
                </div>
            </Transition>
        </div>
    )
}