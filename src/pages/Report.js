import React, { useRef, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../CSS/Signature.css';

const Wrapper = styled.div`
  padding: 5vh 0;
  height: auto;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 10vh 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const ReportBlock = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #ffffff;
  padding: 1.5vw;
  margin-bottom: 2vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 4vw;
  }
`;

const Input = styled.textarea`
  width: 90%;
  height: 40px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: 16px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    font-size: 14px;
    height: 30px;
  }

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; /* 버튼들을 중앙 정렬 */
  width: 100%;
  margin-top: 10px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || '#4CAF50'};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 90%; /* 버튼들이 같은 너비로 맞춰지도록 */

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 0;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor || '#45a049'};
  }
`;

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3366cc;
  padding: 1vh 2vw;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 16px;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  transition: background-color 0.3s;
  &:hover {
    background-color: #264d99;
  }
`;

const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
  width: 95%;
`;

const CanvasContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center; /* 캔버스를 중앙에 정렬 */
  margin-top: 10px;
`;

const Canvas = styled(SignatureCanvas)`
  width: 90% !important;
  aspect-ratio: 1;
  display: block;
  margin: 0px;
  object-fit: contain; /* 캔버스를 부모 크기에 맞게 조정 */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 450px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

function Report() {
  const [state, setState] = useState({
    name: '',
    add: '',
    birth: '',
    phone: '',
    sign: '',
    time: '',
  });

  const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const now = new Date().getTime().toString();
  const navigate = useNavigate();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
    setState({
      ...state,
      sign: sigRef.current.toDataURL('image/png'),
      time: now,
    });
  };

  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
    setState((prevState) => ({ ...prevState, sign: '' }));
  };

  const handleSubmit = () => {
    if (
      !state.name ||
      !state.add ||
      !state.birth ||
      !state.phone ||
      !state.sign
    ) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    if (!/^\d{8}$/.test(state.birth)) {
      alert('생년월일은 8자리 숫자로 입력해주세요. 예: 20250108');
      return;
    }

    if (!/^\d{11}$/.test(state.phone)) {
      alert('핸드폰 번호는 11자리 숫자로 입력해주세요. 예: 01012345678');
      return;
    }

    setIsModalOpen(true);
  };

  const confirmSave = useCallback(async () => {
    try {
      await addDoc(collection(db, 'List'), state);
      alert('저장 성공');
      navigate('/List');
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsModalOpen(false);
    }
  }, [state, navigate]);

  const cancelSave = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <ReportBlock>
          <p>이름을 작성해주세요.</p>
          <Input
            name="name"
            value={state.name}
            onChange={handleChangeState}
            placeholder="이름을 작성해주세요."
            maxLength={5}
          />
        </ReportBlock>

        <ReportBlock>
          <p>주소를 작성해주세요.</p>
          <Input
            name="add"
            value={state.add}
            onChange={handleChangeState}
            placeholder="주소를 작성해주세요."
            maxLength={50}
          />
        </ReportBlock>

        <ReportBlock>
          <p>생년월일을 작성해주세요.</p>
          <Input
            name="birth"
            value={state.birth}
            onChange={handleChangeState}
            placeholder="생년월일 8자리를 작성해주세요. Ex)20250108"
            maxLength={8}
          />
        </ReportBlock>

        <ReportBlock>
          <p>핸드폰번호를 작성해주세요.</p>
          <Input
            name="phone"
            value={state.phone}
            onChange={handleChangeState}
            placeholder="-없이 핸드폰번호 11자리를 작성해주세요. Ex)01012345678"
            maxLength={11}
          />
        </ReportBlock>

        <SignatureWrapper>
          <p>서명(사인)을 작성해주세요.</p>
          <CanvasContainer>
            <Canvas
              penColor="black"
              canvasProps={{ className: 'signature' }}
              ref={sigRef}
              onEnd={handleSignatureEnd}
            />
          </CanvasContainer>
          <button onClick={clearSignature}>Clear</button>
        </SignatureWrapper>

        <ButtonGroup>
          <StyledButton bgColor="#8339B3" onClick={handleSubmit}>
            저장
          </StyledButton>
          <StyledButton onClick={() => window.close()}>취소</StyledButton>
        </ButtonGroup>
        <ButtonGroup>
          <StyledLinkButton to="/List">작성된 동의명부 보기</StyledLinkButton>
        </ButtonGroup>
      </Container>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3>정보 확인</h3>
            <p>이름: {state.name}</p>
            <p>주소: {state.add}</p>
            <p>생년월일: {state.birth}</p>
            <p>핸드폰번호: {state.phone}</p>
            <img
              src={signature}
              alt="서명"
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'contain',
                border: '1px solid #ccc',
              }}
            />
            <p>정보가 정확한지 확인해주세요.</p>
            <ButtonGroup>
              <StyledButton bgColor="#4CAF50" onClick={confirmSave}>
                저장
              </StyledButton>
              <StyledButton bgColor="#f44336" onClick={cancelSave}>
                취소
              </StyledButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
}

export default Report;
