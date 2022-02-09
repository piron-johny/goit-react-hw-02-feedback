import { StyledSection, ButtonWrapper } from './Section.styles';

const Section = ({
  title,
  children: { buttonGood, buttonNeutral, buttonBad, statistics, notification },
}) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <ButtonWrapper>
        {buttonGood}
        {buttonNeutral}
        {buttonBad}
      </ButtonWrapper>
      {notification}
      {statistics}
    </StyledSection>
  );
};

export default Section;
