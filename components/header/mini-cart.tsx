'use client';

import { useState } from 'react';
import BaseIcon from '../icons/base-icon';
import CartIcon from '../icons/cart-icon';
import { Transition } from '@headlessui/react';

export default function MiniCart() {
    const [isOpen, setIsOpen] = useState(false);
    const openCart = () => setIsOpen(!isOpen);

    return (
        <div>
            <BaseIcon
                width="23"
                height="21"
                className="cart-icon"
                onClick={openCart}
            >
                <CartIcon />
            </BaseIcon>
            <Transition 
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div>Carrinho</div>
            </Transition>
        </div>
    )
}