import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  width: 90%;
  margin-top: 100px;
  margin-bottom: 100px;
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
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`
export const FlexContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  height: 50px;
  width: 80px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 120px;
    font-size: 16px;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`
export const Input = styled.input`
  border: 1px solid #334155;
  height: 50px;
  width: 90px;
  margin-left: 7px;
  margin-right: 7px;
  cursor: pointer;
  outline: none;
`
