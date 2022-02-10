import PropTypes from 'prop-types';
import { StyledSection, StyledContainer } from './Section.styles';

const Section = ({
  title,
  children: { feedbackOptions, statistics, notification },
}) => {
  return (
    <StyledSection>
      <StyledContainer>
        <h2>{title}</h2>
        {feedbackOptions}
        {notification}
        {statistics}
      </StyledContainer>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.node),
};

export default Section;
