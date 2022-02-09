import {
  StyledSection,
  ButtonWrapper,
  StyledContainer,
} from './Section.styles';

const Section = ({
  title,
  children: { buttonGood, buttonNeutral, buttonBad, statistics, notification },
}) => {
  return (
    <StyledSection>
      <StyledContainer>
        <h2>{title}</h2>
        <ButtonWrapper>
          {buttonGood}
          {buttonNeutral}
          {buttonBad}
        </ButtonWrapper>
        {notification}
        {statistics}
      </StyledContainer>
    </StyledSection>
  );
};

export default Section;
