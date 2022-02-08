import { Result, Total } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Result>Good: {good}</Result>
      <Result>Neutral: {neutral}</Result>
      <Result>Bad: {bad}</Result>
      <Total>Total: {total}</Total>
      <Result>
        Positive feedback: {total === 0 ? 0 : positivePercentage} %
      </Result>
    </>
  );
};

export default Statistics;
