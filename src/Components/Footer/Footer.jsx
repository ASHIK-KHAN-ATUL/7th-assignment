import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="  bg-black ">
            <section className="flex flex-col justify-center items-center gap-16 py-36 px-32">            
                <div>
                    <img className="" src={logo} alt="" />
                </div>

                <div className='w-full flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-white font-bold '>Abouts US</h1>
                        <p className='font-medium text-gray-500 flex '>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>

                    <div  className='flex flex-col gap-4'>
                        <h1 className='text-white  font-bold'>Quick Links</h1>
                        <ul className='text-gray-500'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>   

                    <div  className='flex flex-col gap-4'>
                        <h1 className='text-white  font-bold'>Subscribe</h1>
                        <p className='text-gray-500'>Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className='px-7 py-4 rounded-s-xl' type="text" placeholder='Enter Your Email' />
                            <button className='bg-lime-200 duration-500 hover:bg-red-300 px-7 py-4   rounded-e-xl'>Subscribe</button>
                        </div>
                    </div>               
                </div>

            </section>
        </div>
    );
};

export default Footer; 