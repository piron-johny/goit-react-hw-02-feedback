import { StyledSection, Title, ButtonWrapper } from './Section.styles';

const Section = ({
  title,
  children: { buttonGood, buttonNeutral, buttonBad, statistics },
}) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <ButtonWrapper>
        {buttonGood}
        {buttonNeutral}
        {buttonBad}
      </ButtonWrapper>
      {statistics}
    </StyledSection>
  );
};

export default Section;
