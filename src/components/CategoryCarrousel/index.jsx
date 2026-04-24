import { useEffect, useState } from 'react';

import {api} from '../../services/api';

export function CategoryCarrousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories');

            console.log(response)
        }

        loadCategories();
    }, []);

  return (
    <div>
      <h1>Category Carrousel</h1>
      {/* {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))} */}
    </div>
  );
}