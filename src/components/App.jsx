import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';
// import { render } from '@testing-library/react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

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
            statistics: (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ),
          }}
        </Section>
      </>
    );
    // return <Feedback {...data} />;
  }
}

export default App;
