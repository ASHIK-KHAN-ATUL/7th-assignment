import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({handleSelectedPlayer , }) => {

    const [players ,setPlayers] = useState([]);

    useEffect( () => {
        fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } , [])



    return (
        <div className=' grid    grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pb-'>
            {
                players.map(player => <Player 
                    handleSelectedPlayer={handleSelectedPlayer} 
                    key={player.id} 
                    player={player}> </Player>)
            }
        </div>
    );
};

export default Players;