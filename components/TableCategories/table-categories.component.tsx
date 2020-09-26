import React from 'react';

import {CategoryButton, TableCategoriesContainer} from './table-categories.styles';


const TableCategories: React.FC = () => {
    return ( 
        <TableCategoriesContainer>
            <CategoryButton active>Неделя</CategoryButton>
            <CategoryButton>День</CategoryButton>
        </TableCategoriesContainer>
    )
}

export default TableCategories;