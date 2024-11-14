import { useState } from 'react'
import Header from './Components/Header/Header'

import './App.css'
import Banner from './Components/Banner/Banner'
import Main1 from './Components/Main/Main1'
import Footer from './Components/Footer/Footer'
import Newsletter from './Components/Newsletter/Newsletter'
// import Players from './Components/Players/Players'

function App() {
  const [coins, setCoins] = useState(0)

  const handleClaimCoinBtn = () => {
    setCoins(coins => coins + 1000000 )
    console.log(coins)
  }





  const  handlePrice = (price) => {
    console.log(price)

  }




  const [isActive ,setIsActive] = useState({
    cart : true,
    status:"available"
  })
  const handleIsActive = (status) => {
    if(status == "available"){
      setIsActive({
        cart : true,
        status:"available"
      })
    }
    else {
      setIsActive({
        cart: false,
        status:"selected"
      })
    }

  }
  


  const [selectedPlayer , setSelectedPlayer] = useState([]);

  const handleSelectedPlayer = (player) =>{
      console.log(player.id);
      const isexist = selectedPlayer.find((p) => p.id == player.id);

      if(isexist){
          alert("This player alreay choose by you !")
      }
      else{

        if(coins >= player.Price){
          setCoins(coins - player.Price)

          handlePrice(player.Price)
          const newPlayer = [...selectedPlayer , player ]
          setSelectedPlayer(newPlayer)
        }
        else{
          alert('"Not enough coins!"')
        }

       
      }   

  }



  const handleDelete = (id) => {
    const newPlayer2 =  selectedPlayer.filter((p) => p.id != id)
    console.log(newPlayer2)
    setSelectedPlayer(newPlayer2)
  }


  return (
    <>
      
      <Header coins={coins} ></Header>
      <Banner handleClaimCoinBtn={handleClaimCoinBtn}  ></Banner>
      <Main1 
      handleSelectedPlayer={handleSelectedPlayer} 
      selectedPlayer={selectedPlayer}
      handleDelete={handleDelete} 
      handleIsActive={handleIsActive} 
      isActive={isActive} ></Main1>
      <Newsletter></Newsletter>
      <Footer></Footer>

      
    </>
  )
}

export default App
