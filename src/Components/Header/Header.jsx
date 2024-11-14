import { useState } from 'react';
import logo from '../../assets/logo.png'

const Header = ({coins}) => {

    const [coin , setCoin] = useState(0)

    return (
        <header className=' sticky top-0  bg-lime-50 bg-opacity-40 backdrop-blur-lg p-4 shadow-md z-10'>
            <section className='w-[80%] mx-auto'>
                <div className='flex justify-between items-center '>
                    <img src={logo} alt="" />
                    <div className='flex justify-between items-center gap-10'>
                        <div className='flex justify-between items-center gap-6 text-base font-medium text-black'>
                            <p><a  href="">Home</a></p>
                            <p><a className='hidden md:block' href="">Fixture</a></p>
                            <p><a className='hidden md:block' href="">Teams</a></p>
                            <p><a className='hidden md:block' href="">Schedules</a></p>
                        </div>
                        <div className='flex items-center border-2 p-3 rounded-xl text-black font-medium'>
                            <p> {coins} Coins</p>
                            <div className='h-7 w-7'><img className='object-cover' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;