import styled from "styled-components";

export const Container = styled.div`
  // background-image: ${(props) => props.theme.background.secundary};
`;

export const Header = styled.div`
  background-image: ${(props) => props.theme.background.secundary};
  height: 150px;
  text-align: center;
  transition: all 0.3s linear;
  margin-bottom: 20px;
`;

export const HeaderText = styled.h1`
  color: ${(props) => props.theme.colors.secundary};
  margin: 0;
  margin-bottom: 20px; 
  padding: 0;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  // background-image: ${(props) => props.theme.background.secundary};
`;