import { Paragraph } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    total !== 0 && (
      <>
        <Paragraph>Good: <b>{good}</b></Paragraph>
        <Paragraph>Neutral: <b>{neutral}</b></Paragraph>
        <Paragraph>Bad: <b>{bad}</b></Paragraph>
        <Paragraph>Total: <b>{total}</b></Paragraph>
        <Paragraph>
          Positive feedback: <b>{total === 0 ? 0 : positivePercentage} %</b>
        </Paragraph>
      </>
    )
  );
};

export default Statistics;
