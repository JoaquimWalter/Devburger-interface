import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Container, Banner, CategoryMenu, ProductsContainer} from './styles'
import { CategoryButton } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';


export function Menu() {

     const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    const navigate = useNavigate();

    const {search} = useLocation();

    

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(()=>{
    const categoryId = +queryParams.get('categoria');

        if(categoryId){
            return categoryId;
    }
    return 0;
    });
        

    
    useEffect(() => {
            async function loadCategories() {
                const { data } = await api.get('/categories');

                const newCategories = [{id: 0, name: 'Todas'}, ...data];
     
                setCategories(newCategories);
                console.log(newCategories);
            }
            

               async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map(product => ({
                currencyValue: formatCurrency(product.price),
                ...product
            }));

            setProducts(newProducts);
          
        }
        loadCategories();
        loadProducts();
    
            
        }, []);

        useEffect(() => {
            if (activeCategory === 0) {
                setFilteredProducts(products);
            } else {
                const filtered = products.filter(product => product.category_id === activeCategory);
                setFilteredProducts(filtered);
            }

        }, [products, activeCategory]);



    return (
        <Container>
            <Banner>
                <h1>O MELHOR <br/>
                    HAMBURGUER<br/>
                    ESTÁ AQUI!

                    <span>Esse cardápio está irrestível!</span>
                </h1>
                
            </Banner>
            <CategoryMenu>
            {categories.map(category => (
                <CategoryButton 
                key={category.id}
                $isActiveCategory={activeCategory === category.id}
                onClick={() => 
                    navigate({
                        pathname: '/cardapio',
                        search: `?categoria=${category.id}`
                    },
                {
                    replace: true
                }, setActiveCategory(category.id)
            )
            }
                > {category.name} </CategoryButton>

            ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />

                ))}

            </ProductsContainer>

        </Container>

    )
}