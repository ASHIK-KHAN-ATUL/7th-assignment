import bannerImg from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png'


const Newsletter = () => {

        return (
            <div className='w-[80%] mx-auto p-5 bg-white rounded-3xl bg-opacity-20 backdrop-blur-lg relative top-28'>
                <div className=" bg-white  bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${bgShadow})` }} >
    
                <div>
                    <div className=" flex flex-col text-center justify-center items-center space-y-5 py-5 px-8 xl:py-16 xl:px-32"> 
                      
                    <div  className='flex flex-col gap-4'>
                        <h1 className='text-black text-4xl  font-bold'>Subscribe to our Newsletter</h1>
                        <p className='text-gray-500'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex flex-col sm:flex-row  justify-around'>
                            <input className='px-7 py-4 rounded-xl border-2' type="text" placeholder='Enter Your Email' />
                            <button className='bg-lime-200 duration-500 hover:bg-red-300 px-7 py-4   rounded-xl'>Subscribe</button>
                        </div>
                    </div>  
                      
                    </div>
                </div>
    
            </div>
            </div>
        );
    };


export default Newsletter;