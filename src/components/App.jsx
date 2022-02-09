import React, { Component } from 'react';
// import { render } from '@testing-library/react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodDecriment = () => {
    return this.setState({ good: this.state.good + 1 });
  };

  handleNeutralDecriment = () =>
    this.setState({ neutral: this.state.neutral + 1 });

  handleBadDecriment = () => this.setState({ bad: this.state.bad + 1 });

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, item) => (acc += item),
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const stateGood = this.state.good;
    const positiveFeedback = Math.round(
      (stateGood / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  };

  render() {
    const {good, neutral, bad} = this.state

    return (
      <>
        <Section title="Please leave feedback">
          {{
            buttonGood: (
              <FeedbackOptions
                options={'Good'}
                onLeaveFeedback={this.handleGoodDecriment}
              />
            ),
            buttonNeutral: (
              <FeedbackOptions
                options={'Neutral'}
                onLeaveFeedback={this.handleNeutralDecriment}
              />
            ),
            buttonBad: (
              <FeedbackOptions
                options={'Bad'}
                onLeaveFeedback={this.handleBadDecriment}
              />
            ),
          }}
        </Section>
        <Section title="Statistics">
          {{
            notification: <Notification message='There is no feedback' total={this.countTotalFeedback()}/>,
            statistics: (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ),
          }}
        </Section>
      </>
    );
  }
}

export default App;
