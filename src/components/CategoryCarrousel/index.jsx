import  { useEffect, useState } from 'react';

import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = MultiCarouselModule.default?.default || MultiCarouselModule.default 
|| MultiCarouselModule.Carousel;

import {api} from '../../services/api';
import { Container, Title, ContainerItems } from './styles';


export function CategoryCarrousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
            console.log(data);
        }

        loadCategories();
    }, []);

    console.log(CategoryCarrousel);

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
      <Title>Categorias</Title>

      {categories && categories.length > 0 ? (
        <Carousel 
        responsive={responsive} 
        infinite={true}
        itemClass="carousel-item">

          {categories.map(category => (
            <ContainerItems 
            key={category.id}
            imageUrl = {category.url }
            >
              <p>{category.name}</p>
            </ContainerItems>
          ))}
        </Carousel>
      )
      : (
        <p>Loading categories...</p>
      )}


      

    
     
    </Container>


  );
}