import {
  Title,
  Button,
  Container,
  ButtonWrapper,
  SubTitle,
  Result,
} from './Feedback.styles';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <ButtonWrapper>
          <Button>Good</Button>
          <Button>Neutral</Button>
          <Button>Bad</Button>
        </ButtonWrapper>
        <SubTitle>Statistics</SubTitle>
        <Result>{'Good:' }</Result>
        <Result>{'Neutral:' }</Result>
        <Result>{'Bad:' }</Result>
      </Container>
    );
  }
}

export default Feedback;
