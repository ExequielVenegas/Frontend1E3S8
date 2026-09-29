import fireEmblem from '../assets/fe.jpg'
import finalFantasy from '../assets/ff7.jpg'
import mario from '../assets/mario.avif'
import metroid from '../assets/metroid.avif'
import silksong from '../assets/silksong.avif'
import talesOfArise from '../assets/toa.jpg'
import zelda from '../assets/zelda.avif'

// Relaciono los nombres del JSON con las imágenes del proyecto.
export const productImages = { fireEmblem, finalFantasy, mario, metroid, silksong, talesOfArise, zelda }

export const formatPrice = (price) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)
