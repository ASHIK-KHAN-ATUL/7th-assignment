
const Player = ({player , handleSelectedPlayer , }) => {

    // console.log(handleSelectedPlayer)

    const {id , img , name , country , rating , batting_type , Price , role} = player;

    return (
        <div className='w-[80%] mx-auto mt-8'>

            <div className="border-2 rounded-2xl p-6 flex flex-col space-y-5">

                <div className="w-full h-60">
                    <img className=" w-[100%] h-[95%] object-cover object-top rounded-xl " src={img} alt="" />
                </div>

                <div className="flex gap-5 items-center">
                    <div className="h-[25px] w-[25px] "><img className="object-cover" src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=000000" alt="" /></div>
                    <p className="text-sm font-semibold">{name}</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <div  className="h-[25px] w-[25px] "><img  className="object-cover" src="https://img.icons8.com/?size=100&id=2755&format=png&color=000000" alt="" /></div>
                        <p className="font-medium text-gray-500">{country}</p>
                    </div>
                    <div className="py-2 px-4 bg-gray-200 text-black rounded-xl font-semibold "> {role} </div>
                </div>

                <div className="border-b-2"></div>
                
                <p className="font-bold text-black">Rating</p>
                
                <div className="flex justify-between items-center">
                    <p className="font-bold text-black">{batting_type}</p>
                    <p className="font-medium text-gray-500 mr-2">{batting_type}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="font-bold text-black">Price : ${Price}</p>
                    <button onClick={() => handleSelectedPlayer(player)} className="text-gray-500 font-medium border-2 py-2 px-4 rounded-xl">Choose Player</button>
                </div>

            </div>    

        </div>
    );
};

export default Player;