import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Robos() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = searchTerm.length >= 3
    ? data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : data;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
     <input type="text" onChange={handleSearch} />
     <div className="disposition">
      
        {filteredData.length > 0 ? (
        filteredData.map((user, id) => {
          return user ? <Card robo={user} key={id} /> : <p>En cours de chargement...</p>;
         })
        ) : (
         <p>{searchTerm.length >= 3 ? "Aucun résultat trouvé." : "Entrez au moins 3 caractères pour commencer la recherche."}</p>
       )}
      </div>
    </div>
    
  );
}


