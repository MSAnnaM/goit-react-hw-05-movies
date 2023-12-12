import styled from 'styled-components';


export const ActorList = styled.div`
margin: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #8a2be2;
  border-radius: 8px;
  color: #fff;
`;

export const ActorItem = styled.div`
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
    height: 70%;
  }

  h1 {
    font-size: 1.5em;
    margin: 10px 0;
    color: #fff; 
  }

  h3 {
    font-size: 1em;
    color: #ddd; 
  }
`;

export const NoCastInfo = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(138, 43, 226, 0.7); 
  border-radius: 8px;
  color: #fff;
`;