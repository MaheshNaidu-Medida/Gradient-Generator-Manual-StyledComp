import {Component} from 'react'
import {
  GradientGeneratorContainer,
  ContentContainer,
  Heading,
  Text,
  UnorderedList,
  FlexContainer,
  GenerateButton,
  Input,
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
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    currentDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerate = () => {
    const {currentDirection, firstColor, secondColor} = this.state
    this.setState({
      gradientValue: `to ${currentDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  onClickDirection = id => {
    const directionObject = gradientDirectionsList.find(
      each => each.directionId === id,
    )
    const direction = directionObject.value
    this.setState({currentDirection: direction})
  }

  onClickFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onClickSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {
      firstColor,
      secondColor,
      currentDirection,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Text description>Choose Direction</Text>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                currentDirection={currentDirection}
                details={each}
                onClickDirection={this.onClickDirection}
              />
            ))}
          </UnorderedList>
          <Text description>Pick the Colors</Text>
          <FlexContainer>
            <Text>{firstColor}</Text>
            <Text>{secondColor}</Text>
          </FlexContainer>
          <FlexContainer>
            <Input
              type="color"
              value={firstColor}
              onChange={this.onClickFirstColor}
            />
            <Input
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
