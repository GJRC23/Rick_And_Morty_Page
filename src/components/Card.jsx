export default function Card({ id, name, status, species, gender, origin, image, onClose }) 
{
   return (
      <div className="card">
         <button className="xBtn" onClick={() => onClose(id)}>X</button>
         <img className="cardImg" src={image} alt='' />
         <div className="datos">
            <h2 id="name">{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin.name}</h2>
         </div>
      </div>
   );
}
