import { Title, Button, Section, ButtonWrapper } from './Feedback.styles';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

const ButtonOptions = ['Good', 'Neutral', 'Bad'];

const Feedback = ({
  state,
  onDecrimentGood,
  onDecrimentNeutral,
  onDecrimentBad,
  total,
  positive,
}) => {
  return (
    <Section>
      <Title>Please leave feedback</Title>
      <ButtonWrapper>
        <FeedbackOptions
          options={ButtonOptions}
          onLeaveFeedback={onDecrimentGood}
        />
      </ButtonWrapper>
      <Statistics state={state} total={total} positivePercentage={positive} />
    </Section>
  );
};

export default Feedback;
