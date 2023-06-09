import './Cards.css'
import Card from '../Card/Card.jsx'

export default function Cards( { characters, onClose, showButton } ) {
   return (
      <div className="cards">
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                     showButton={showButton}
                  />
               );
            })
         }
      </div>
   );
}
