import { StyledButton } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButton onClick={() => onLeaveFeedback()}>{options}</StyledButton>
  );
};

export default FeedbackOptions;
