

const SelectedPlayer = ({singleSelectedPlayer , handleDelete}) => {
    return (
        <div>
            <div className="p-6 border-2 rounded-2xl mt-6  flex justify-between items-center bg-sky-50 bg-opacity-40 backdrop-blur-lg ">
                    <div className="flex justify-between items-center gap-6">
                            <div className="h-20 w-20">
                                <img className=" w-[95%] h-[95%] object-cover object-top rounded-xl" src={singleSelectedPlayer.img} alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-2xl">{singleSelectedPlayer.name}</p>
                                <p className="font-medium text-xl text-gray-500">{singleSelectedPlayer.batting_type}</p>
                            </div>
                    </div>
                    <div className="h-9 w-9">
                            <button onClick={() => handleDelete(singleSelectedPlayer.id)}>
                                <img className="object-cover" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" alt="" />
                            </button>
                    </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;