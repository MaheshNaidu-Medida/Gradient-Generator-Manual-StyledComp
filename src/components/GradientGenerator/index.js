import {Component} from 'react'
import {
  GradientGeneratorContainer,
  ContentContainer,
  Heading,
  Text,
  UnorderedList,
  FlexContainer,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColorText: #8ae323,
    secondColorText: #014f7b,
    firstColor: #8ae323,
    secondColor: #014f7b,
    currentDirection: gradientDirectionsList[0].value,
  }

  onClickGenerate = () => {
      const {firstColorText, secondColorText} = this.state
    this.setState({firstColor: firstColorText, secondColor: secondColorText})
  }

  onClickDirection = (id) => {
      const directionObject = gradientDirectionsList.find(each => each.directionId === id)
      const direction = directionObject.value
      this.setState({currentDirection: direction})
  }

  onClickFirstColor = (event) => {
    this.setState({firstColorText: event.target.value})
  }

  onClickSecondColor = (event) => {
    this.setState({secondColorText: event.target.value})
  }

  render() {
    const {firstColor, secondColor, currentDirection, firstColorText, secondColorText} = this.state

    return (
      <GradientGeneratorContainer
      data-testid = "gradientGenerator"
        firstColor={firstColor}
        secondColor={secondColor}
        currentDirection={currentDirection}
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Text description>
            Choose Direction
          </Text>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                currentDirection={currentDirection}
                details={each}
                onClickDirection = {this.onClickDirection}
              />
            ))}
          </UnorderedList>
          <Text description>
            Pick the Colors
          </Text>
          <FlexContainer>
            <Text>{firstColorText}</Text>
            <Text>{secondColorText}</Text>
          </FlexContainer>
          <FlexContainer>
            <input
              type="color"
              value={firstColor}
              onChange={this.onClickFirstColor}
            />
            <input
              type="color"
              value={secondColor}
              onChange={this.onClickSecondColor}
            />
          </FlexContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </ContentContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
