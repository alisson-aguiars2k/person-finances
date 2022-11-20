import styled from "styled-components";

export const Container = styled.div`
  background-image: ${(props) => props.theme.background.primary};
  box-shadow: 10px 10px 5px ${(props) => props.theme.shadow.primary};
  border-radius: 10px;
  padding: 20px;
  margin-top: -50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const MonthArea = styled.div`
  flex: 1;
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

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.primary}
`;


export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;