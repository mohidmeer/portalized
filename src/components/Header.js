import React from 'react';
import { Link, Links, NavLink, useNavigate } from 'react-router-dom';
import Logo from './logo';
import { FiShoppingCart } from "react-icons/fi";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { MdDelete } from 'react-icons/md';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { logout } from '../store/slices/userSlice';
import { FaAngleDown } from "react-icons/fa6";
import Button from './ui/button';




const Header = () => {
    return (
        <header className="py-8 px-4 md:px-20 bg-black text-white">
            <div className="mx-auto flex justify-between items-center gap-2">
                <div className="flex">
                    <Logo />
                </div>
                <nav className="hidden lg:flex sm:space-x-2  lg:space-x-4  xl:space-x-8 whitespace-nowrap">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/mobile-app"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Mobile App
                    </NavLink>
                    <NavLink
                        to="/watch"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Watch
                    </NavLink>
                    <NavLink
                        to="/listen"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Listen
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        Contact Us
                    </NavLink>
                </nav>
                <div className="flex space-x-6">
                    <Cart />
                    <User />
                    <button
                    type="button"
                    className="lg:hidden text-white"
                    onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        menu.classList.toggle('!flex');
                        
                    }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
                
            </div>

            
            <div id="mobile-menu" className="hidden bg-black text-white space-y-6 px-4 py-6  flex-col ">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/mobile-app"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Mobile App
                </NavLink>
                <NavLink
                    to="/watch"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Watch
                </NavLink>
                <NavLink
                    to="/listen"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Listen
                </NavLink>
                <NavLink
                    to="/shop"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                    Contact Us
                </NavLink>
            </div>
        </header>
    );
};

export default Header;






function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };
    return (



        <Popover>
            <PopoverButton className="mt-2 *:focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                <FiShoppingCart size={24} />
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom center"
                className="p-4 rounded-xl bg-[#090909] text-white transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 w-full sm:w-[684px]"
            >
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <h6 className="h6 font-light">{`Your Cart (${cartItems.length})`}</h6>
                        <Link to="/checkout" className="b7">
                            View Cart
                        </Link>
                    </div>

                    <div className="mt-4 space-y-4 ">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-4 bg-[#121212] p-3 rounded-lg"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded object-cover"
                                />


                                <div className="flex-1">
                                    <p className="h8">{item.name}</p>
                                    <p className="h7  mt-1">${item.price}</p>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="flex gap-1 items-center"
                                    >
                                        <MdDelete /> Delete
                                    </button>
                                </div>


                                <div className="flex items-center gap-3 bg-black rounded-md mt-5   ">
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                        className="px-4 py-2  rounded"
                                    >
                                        -
                                    </button>
                                    <span className="text-sm bg-bla">{item.quantity}</span>
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                        className="px-4 py-2  rounded"
                                    >
                                        +
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <Link to={'/checkout'} className='btn-link max-w-fit !px-10' >
                            Continue to Checkout
                        </Link>
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}



function User() {

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    return (
        <>
            {isAuthenticated ? (
                <div>
                    {user &&
                        <Profile user={user} />
                    }
                </div>
            ) : (
                <>
                    <Link to={'/sign-up'} className='btn-link-inverted'>
                        Register
                    </Link>
                    <Link to={'/login'} className='btn-link'>
                        Login
                    </Link>
                </>
            )}
        </>
    );
}



function Profile({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <Menu>
            <MenuButton className="inline-flex items-center gap-2">
                <div className='flex gap-2 items-center b9 font-extralight   '>
                    <div className='w-10 h-10 rounded-full overflow-hidden border'>
                        <img src={'/assets/user2.png'} />
                    </div>

                    <FaAngleDown />
                </div>
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="w-56 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <div class="px-4 py-3 border-b">
                        <span class="block text-sm ">{user.name}</span>
                        <span class="block text-sm truncate text-primary-100 ">{user.email}</span>
                    </div>
                </MenuItem>
                <MenuItem>
                    <Link className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' to={'/user/profile'}>
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' to={'/user/saved-merchandise'}>
                        Saved Merchandise
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' to={'/user/saved-podcasts'}>
                        Saved Podcasts
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' to={'/user/following'}>
                        Following
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' to={'/user/orders'}>
                        Orders
                    </Link>
                </MenuItem>
                <MenuItem>
                    <button onClick={handleLogout} className='text-red-600 group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
                        Logout
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}