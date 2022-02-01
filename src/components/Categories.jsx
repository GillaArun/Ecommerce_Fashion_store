import  styled  from 'styled-components';
import React from 'react';
import { categories } from '../data'; 
import CategoreyItem from './CategoreyItem';


const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between
`;
const Categories = () => {
  return(
      <Container>
        {categories.map(item=>(
            <CategoreyItem item={item} key={item.id}/>
        ))}
      </Container>
  );
};

export default Categories;
