import {
  StyledSection,
  StyledContainer,
} from './Section.styles';

const Section = ({
  title,
  children: { feedbackOptions , statistics, notification },
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

export default Section;
