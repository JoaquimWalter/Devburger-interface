import  { useEffect, useState } from 'react';

import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = MultiCarouselModule.default?.default || MultiCarouselModule.default 
|| MultiCarouselModule.Carousel;

import {api} from '../../services/api';
import { Container, Title,  } from './styles';
import { CardProduct } from '../CardProduct';


export function OffersCarrousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            const onlyOffers = data.filter(product => product.offer === true);

            setOffers(onlyOffers);

          
        }

        loadProducts();
    }, []);

    // console.log(CategoryCarrousel);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1280, min: 690 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 690, min: 0 },
          items: 2
        }
      };
    

    
    


  return (
    

    <Container>
      <Title>Ofertas do Dia</Title>

      {offers && offers.length > 0 ? (
        <Carousel 
        responsive={responsive} 
        infinite={true}
        itemClass="carousel-item">

          {offers.map(product => (
           <CardProduct key={product.id} product={product} />
          ))}
        </Carousel>
      )
      : (
        <p>Loading categories...</p>
      )}


      

    
     
    </Container>


  );
}