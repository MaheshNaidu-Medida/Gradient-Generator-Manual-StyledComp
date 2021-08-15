import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
width:100%;
height:100vh;
background-image: ${props =>
  `linear-gradient(to ${props.currentDirection},${props.firstColor},${props.secondColor},
  )`}
display:flex;
justify-content:center;
align-items:center;
`
export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`
export const Text = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: ${props => (props.description ? '22px' : '18px')}
  font-weight: normal;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.description ? '28px' : '22px')}
  }
`
export const UnorderedList = styled.ul`
  width: 100%;
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.button ? 'center' : 'space-between')}
  align-items: center;
`
export const GenerateButton = styled.div`
  background-color: #00c9b7;
  border: none;
  border-radius: 7px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`
