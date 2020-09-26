import styled from '@emotion/styled';

export const TableCategoriesContainer = styled.div`
display: flex;
flex-direction: row;
`
interface CategoryButtonProps {
    active?: boolean
}

export const CategoryButton = styled.button<CategoryButtonProps>`
    cursor: pointer;
    padding:15px;
    border-radius: 4px;
    margin-right:10px;
    height:43px;
    background-color: ${props => props.active? '#ffffff': 'transparent'};
    border: ${props => props.active? 'none': '1px solid rgba(0, 0, 0, 0.1)'};
    color: ${props => props.active? 'black': 'rgba(0, 0, 0, 0.5)'};
    line-height: 100%;
    font-size: 13px;
    font-weight: ${props => props.active? '500': 'normal'};

`