import './About.css'

const About = () => {
    return(
        <div className="aboutContainer">
            <h1 className="titleAbout">Introducción</h1>
            <p className="pContainer">
                Bienvenidos a mi proyecto de personajes de la serie Rick y Morty en JavaScript. La serie Rick y Morty es una serie animada de ciencia ficción que sigue las aventuras de un abuelo loco científico, Rick, y su nieto tímido y ansioso por complacer, Morty. En este proyecto, he creado una base de datos de todos los personajes que aparecen en la serie, y he utilizado JavaScript para mostrarlos en una página web interactiva.
            </p>

            <h1 className="titleAbout">Características del proyecto</h1>
            <p className="pContainer">
                Este proyecto utiliza la API de Rick and Morty para obtener los datos de los personajes de la serie. He utilizado JavaScript para hacer llamadas a la API y obtener los datos necesarios para mostrar los personajes en la página web. También utilicé CSS para el diseño y la estructura de la página.  
            </p>

            <h1 className="titleAbout">Funcionalidad del proyecto</h1>
            <p className="pContainer">
                El proyecto permite a los usuarios buscar personajes por ID o de manera aleatoria utilizando una barra de búsqueda. Los resultados se muestran en una cuadrícula de imágenes con información básica sobre cada personaje como su nombre. Los usuarios pueden hacer clic en el nombre para obtener información más detallada sobre el personaje, como su género y lugar de origen. Además podrán seleccionar sus personajes favoritos y que queden guardarlos en la sección Favorites.
            </p>

            <h1 className="titleAbout">Conclusión</h1>
            <p className="pContainer">
                En general, crear este proyecto ha sido una experiencia muy gratificante. Me ha permitido aprender más sobre JavaScript y cómo se puede utilizar para crear una página web interactiva y atractiva. También me ha permitido profundizar en mi amor por la serie Rick y Morty y explorar más a fondo los personajes. Agradezco a la comunidad de programadores en línea que ha proporcionado recursos y apoyo durante la creación de este proyecto.
            </p>
        </div>
    )
}

export default About;