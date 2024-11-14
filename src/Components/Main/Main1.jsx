import { useState } from "react";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";


const Main1 = ({handleIsActive,isActive , handleDelete , handleSelectedPlayer , selectedPlayer , }) => {

    console.log(isActive)
    const [selected , setSelected] = useState(0);




    // const [selectedPlayer , setSelectedPlayer] = useState([]);

    // const handleSelectedPlayer = (player) =>{
    //     console.log(player.id);
    //     const isexist = selectedPlayer.find((p) => p.id == player.id);

    //     if(isexist){
    //         alert("This player alreay choose by you !")
    //     }
    //     else{
    //         const newPlayer = [...selectedPlayer , player ]
    //     setSelectedPlayer(newPlayer)
    //     }   
    // }
    // console.log(selectedPlayer);






    return (
        <div className="w-[80%] mx-auto mt-20">
            <div className="flex justify-between">
                <p  className="text-3xl font-bold text-black">Available Players </p>
                <div className="border-2 rounded-2xl flex flex-col sm:flex-row ">
                    <button onClick={() => handleIsActive("available")} 
                    className={` ${isActive.cart?"py-4 px-8 rounded-s-2xl font-bold bg-lime-300": "py-4 px-8 rounded-s-2xl font-bold  "}`}
                    >Avaiable</button>
                    <button onClick={() => handleIsActive("selected")} 
                    className={` ${isActive.cart?"py-4 px-8 rounded-s-2xl font-bold": "py-4 px-8 rounded-e-2xl font-bold  bg-lime-300"}`}>Selected ({selectedPlayer.length}) </button>
                </div>
            </div> 

            {isActive.cart?<Players  handleSelectedPlayer={handleSelectedPlayer}></Players> : <Selected handleDelete={handleDelete} selectedPlayer={selectedPlayer}></Selected>}         
        </div>
    );
};

export default Main1;