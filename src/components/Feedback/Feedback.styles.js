import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 29px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  background: #9b9b9b;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background: #abaaaa;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const Result = styled.p`
  font-size: 20px;
`