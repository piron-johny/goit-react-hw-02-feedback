import { StyledButton, ButtonWrapper } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButton onClick={() => onLeaveFeedback()}>{options}</StyledButton>
  );
};

export default FeedbackOptions;
