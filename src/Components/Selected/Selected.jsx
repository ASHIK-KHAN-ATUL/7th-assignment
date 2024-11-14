import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({selectedPlayer , handleDelete}) => {

    console.log(selectedPlayer)

    return (
        <div>
            {selectedPlayer.map(singleSelectedPlayer => <SelectedPlayer singleSelectedPlayer={singleSelectedPlayer} 
            key={singleSelectedPlayer.id}
            handleDelete={handleDelete}
            ></SelectedPlayer>)}
        </div>
    );
};

export default Selected;