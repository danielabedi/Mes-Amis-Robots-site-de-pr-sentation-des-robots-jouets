import React from "react";

export default function Card({robo}){
    return(
        <div className="card">
         <img className="robo-image" src={`https://robohash.org/${robo.name}.png`} alt="robo" />
         <h3 className="tex" >{robo.name}</h3>
         <p className="tex-mail">{robo.email}</p>
        </div>
    )
}
