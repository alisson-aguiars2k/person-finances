import styled from "styled-components";


export const Container = styled.div`
  background-image: ${(props) => props.theme.background.primary};
  box-shadow: 10px 10px 5px ${(props) => props.theme.shadow.primary};
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
`;


export const AddItem = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    transition: all 0.3s linear;
  }
`;


export const FilterItem = styled.select`
    flex: 1;
    outline: 0;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-right: 10px;
    padding-left: 10px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;


export const OptionItem = styled.option`
    
`;


export const SearchItem = styled.input`
    flex: 2;
    outline: 0;
    border: 1px solid #CCC;
    border-radius: 5px;
    padding-left: 10px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;