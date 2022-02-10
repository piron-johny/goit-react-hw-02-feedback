import { StyledButton, ButtonWrapper } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => (
        <StyledButton onClick={onLeaveFeedback} key={option}>
          {option}
        </StyledButton>
      ))}
    </ButtonWrapper>
  );
};

export default FeedbackOptions;
