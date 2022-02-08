import {
  Title,
  Button,
  Container,
  ButtonWrapper,
  SubTitle,
  Result,
} from './Feedback.styles';

export const Feedback = ({
  state: { good, neutral, bad },
  onDecrimentGood,
  onDecrimentNeutral,
  onDecrimentBad,
}) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <ButtonWrapper>
        <Button onClick={() => onDecrimentGood()}>Good</Button>
        <Button onClick={() => onDecrimentNeutral()}>Neutral</Button>
        <Button onClick={() => onDecrimentBad()}>Bad</Button>
      </ButtonWrapper>
      <SubTitle>Statistics</SubTitle>
      <Result>Good:  {good}</Result>
      <Result>Neutral:  {neutral}</Result>
      <Result>Bad:  {bad}</Result>
    </Container>
  );
};

export default Feedback;
