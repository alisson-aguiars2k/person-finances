import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: showModal 1s linear;

  @keyframes showModal {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const Content = styled.div`
  background-image: ${(props) => props.theme.background.secundary};
  border-radius: 10px;
  padding: 40px;
  max-width: 980px;
  box-shadow: 0px 0px 5px #ccc;
  z-index: 999;
  flex: 1;
  margin-top: -30px;
  box-shadow: 5px 10px ${(props) => props.theme.shadow.primary};
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 0.5fr 0.5fr;
    gap: 5px;
    justify-content: center;
    align-items: center;
`;


export const CategoryArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary};
`;

export const CategorySelect = styled.select<{ category: string }>`
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 5px solid
    ${(props) => (props.category !== "" ? "#28a745" : "#ddd")};
  border-radius: 5px 0px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
`;

export const CategoryOption = styled.option`

`;


export const TitleArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary}
`;


export const InputTitle = styled.input<{ title: string }>`
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 5px solid ${(props) => (props.title !== "" ? "#28a745" : "#ddd")};
  border-radius: 5px 0;
  margin-top: 5px;
  transition: all 0.3s linear;
`;


export const ValueArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ValueText = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary}
`;


export const InputValue = styled.input<{ price: number }>`
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 5px solid ${(props) => (props.price !== 0 ? "#28a745" : "#ddd")};
  border-radius: 5px 0px;
  margin-top: 5px;
  transition: all 0.3s linear;
`;


export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const BtnAdd = styled.button`
  margin-top: 10px;
  outline: 0;
  border: 0;
  background-image: ${(props) => props.theme.background.secundary};
  color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s linear;
  margin-top: 27px;
  box-shadow: 10px 10px 5px ${(props) => props.theme.shadow.primary};
  :hover {
    background-image: linear-gradient(darkgreen, white);
    transition: all 0.3s linear;
    opacity: 1;
  }
`;