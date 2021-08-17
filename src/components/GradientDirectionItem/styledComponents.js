import styled from 'styled-components'

export const DirectionButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ededed;
  padding: 15px 15px 15px 15px;
  border: none;
  border-radius: 10px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  opacity: ${props => (props.highlightDirection ? 1 : 0.5)};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
`
export const ListItem = styled.li`
  width: 45%;
  list-style-type: none;
  padding: 0;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
