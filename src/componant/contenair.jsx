

function Contenair(){
    return( 
    <div className="contenair">
        <h1>MES AMIS ROBOTS</h1>
        <input type="text" placeholder="Rechercher par nom" />
        <div className='position'>
              <Card />  
              <Card />
              <Card />
              <Card />
            </div>
            <div className='position'>
              <Card />  
              <Card />
              <Card />
              <Card />
            </div>
            <div className='position'>
              <Card />  
              <Card />
            </div>
    </div>
    )
}
export default Contenair;