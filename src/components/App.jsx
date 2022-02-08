import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodDecriment = () => this.setState({ good: this.state.good + 1 });
  handleNeutralDecriment = () =>
    this.setState({ neutral: this.state.neutral + 1 });
  handleBadDecriment = () => this.setState({ bad: this.state.bad + 1 });

  render() {
    const state = this.state;
    const total = Object.values(state).reduce((acc, item) => (acc += item), 0);
    const positiveFeedback = Math.round((state.good / total) * 100);
    console.log(positiveFeedback ? 0 : positiveFeedback);

    return (
      <Feedback
        state={state}
        onDecrimentGood={this.handleGoodDecriment}
        onDecrimentNeutral={this.handleNeutralDecriment}
        onDecrimentBad={this.handleBadDecriment}
        total={total}
        positive={positiveFeedback}
      />
    );
  }
}

export default App;
