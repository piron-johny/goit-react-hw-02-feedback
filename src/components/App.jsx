import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  nameButton = ['Good', 'Neutral', 'Bad'];

  onLeaveFeedback = e => {
    const name = e.currentTarget.innerText.toLowerCase();
    return this.setState({ [name]: this.state[name] + 1 });
  };

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
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          {{
            feedbackOptions: (
              <FeedbackOptions
                options={this.nameButton}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            ),
          }}
        </Section>
        <Section title="Statistics">
          {{
            notification: this.countTotalFeedback() === 0 && (
              <Notification message="There is no feedback" />
            ),
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
