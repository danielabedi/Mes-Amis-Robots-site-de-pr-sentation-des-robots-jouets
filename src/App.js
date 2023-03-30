import React from 'react';
import './App.css';
import Robos from './componant/Robots';
// import Card from './componant/Card';

export default function App(){
  // const [valeur, setValeur] = useState();
  // const handleChange = (e)=>{
  //   setValeur(e.target.value);
  //   console.log(valeur);

  // } 
  return(
     <div className='App'>
        <h1>MES AMIS ROBOTS</h1>
           {/* <input type="text" placeholder="Rechercher robo par nom"  onChange={handleChange} value={valeur}/> */}
           <Robos />
     </div>
  )

}
 
