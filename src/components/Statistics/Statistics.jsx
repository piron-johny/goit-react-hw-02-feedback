import { Paragraph } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    total !== 0 && (
      <>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph fw="500">Total: {total}</Paragraph>
        <Paragraph>
          Positive feedback: {total === 0 ? 0 : positivePercentage} %
        </Paragraph>
      </>
    )
  );
};

export default Statistics;
