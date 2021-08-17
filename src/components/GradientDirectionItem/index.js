import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection, currentDirection} = props

  const {directionId, displayText, value} = details
  const onClickButton = () => {
    onClickDirection(directionId)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        highlightDirection={currentDirection === value}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
