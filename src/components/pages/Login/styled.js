import styled from 'styled-components';

export const Flexbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  /* padding: 100px 0; */
`;  

export const Title = styled.h1`
  font-family: Goldplay-SemiBold;
  text-align: center;
  font-size: 36px;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  justify-content:center;
  flex-direction: column;
`;

export const InputSubmit = styled.input`
  padding: 10px 0px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 100px;
  color: white;
  font-size: 18px;
  font-family: Goldplay-semiBold;
  margin-bottom: 16px;
`;

export const InputFields = styled.input`
  padding: 10px 0px;
  border: 2px solid ${props => props.theme.colors.blue};
  border-radius:100px;
  margin-bottom: 16px;
  ::-webkit-input-placeholder {
   text-align: center;
}
 :focus {
  outline: none;
}
`;

export const NoAccount = styled.p`
  color: black;
  text-align: center;
  margin-top: 12px;
  font-family: Goldplay;
`;

export const LoginCard = styled.div`
  background-color: white;
  margin: 50px auto auto auto;
  width: 800px;
  border-radius: 16px;
`;  