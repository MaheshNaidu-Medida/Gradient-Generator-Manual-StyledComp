import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection, currentDirection} = props

  const {directionId, displayText, value} = details
  const onClickButton = () => {
    onClickDirection(directionId)
  }

  return (
    <li>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        highlightDirection={currentDirection === value}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}
export default GradientDirectionItem
