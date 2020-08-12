import React from 'react';
import Box from '../Box/Box';
import './spaces.scss';
import linkedin from '../../images/social/linkedin.png';
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import youtube from '../../images/social/youtube.png';
import blog from '../../images/blog.png';

const boxes = [
    {
        type: 1,
        text: "Si te gustaría conocer mi perfil profesional y conectar profesionalmente, o si ya me conoces y te gustaría ayudarme a validar mis skills, te invito a visitar mi…",
        image: linkedin,
        url: "https://linkedin.com/in/deibyod/"
    },
    {
        type: 2,
        text: "No soy fotografo, no domino ni lo esencial, pero intento capturar escenas que me agradan a la vista. Si quieres ayudarme con tus likes, comentarios o incluso críticas, sígueme en mi…",
        image: instagram,
        url: "https://instagram.com/deibyod/"
    },
    {
        type: 3,
        text: "Si eres de los que prefieren intercambiar “buenas” ideas en corto, te invito a seguirnos en…",
        image: twitter,
        url: "https://twitter.com/deibyod"
    },
    {
        type: 1,
        text: "¿Nos conocemos personalmente? Me alegraría conectar contigo más cotidianamente. Continuemos conociéndonos y conectando a través de…",
        image: facebook,
        url: "https://www.facebook.com/deibyod/"
    },
    {
        type: 2,
        text: "¡Soy YouTuber! En realidad no, pero muy ocasionalmente experimento con algo. Conoce nuestro canal de viajes GoTravel en…",
        image: youtube,
        url: "https://www.youtube.com/channel/UC7PSm60sA0_URrmLZ9L_q3Q"
    },
    {
        type: 3,
        text: "Algunos videos muy antiguos y diversos en mi casi-obsoleto canal en…",
        image: youtube,
        url: "https://www.youtube.com/DeibyOd"
    },
    {
        type: "blue",
        text: "A lo largo de mi carrera, algo, bien diverso, he escrito en mi…",
        image: blog,
        url: "https://odagile.com/blog/"
    }
];

const Spaces = ()  => {
    return(
        <div className="spaces-container">
            {boxes.map((singleBox, i) => (<Box key={i} box={singleBox} />))}
        </div>
    )
}

export default Spaces;