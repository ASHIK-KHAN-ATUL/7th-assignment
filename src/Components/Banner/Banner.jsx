import bannerImg from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png'

const Banner = ({handleClaimCoinBtn}) => {
    return (
        <div 
        className="w-[80%] mx-auto bg-black mt-8 bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${bgShadow})` }} >

            <div>
                <div className=" flex flex-col justify-center items-center space-y-5 py-5 px-8 xl:py-16 xl:px-32"> 
                    <img src={bannerImg} alt="" />
                    <h2 className="text-4xl font-bold text-white text-center">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className="text-2xl font-semibold text-gray-500 text-center">Beyond Boundaries Beyond Limits</p>
                    <div className="border-2 p-2 rounded-2xl inline-block">
                         <button onClick={handleClaimCoinBtn} className=" bg-red-300 px-5 py-3 rounded-xl text-base font-bold">Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;