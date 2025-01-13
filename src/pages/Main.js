import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9;
  padding: 5vh 0;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 10vh 0;
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const StyledLink = styled(Link)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 200px;
    padding: 10px 0;
  }
`;

const StyledButton = styled.button`
  background-color: #8339b3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9a5ccf;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 0;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Container>
        <StyledText>
          안녕하세요. 당신은 최정원의 탄원서 동의를 희망하십니까?
        </StyledText>
        <StyledLink to="/Report">
          <StyledButton>동의</StyledButton>
        </StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Main;
