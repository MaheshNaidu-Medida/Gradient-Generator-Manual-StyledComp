import styled from 'styled-components'

export const DirectionButton = styled.button`
  width: 45%;
  height: 60px;
  background-color: #ededed;
  padding: 10px 15px 15px 10px;
  border: none;
  border-radius: 8px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  opacity: ${props => (props.highlightDirection ? 1 : 0.5)};
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 70px;
  }
`
