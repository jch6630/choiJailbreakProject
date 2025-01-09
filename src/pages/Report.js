import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components'
import { db } from "../firebase"
import {collection, addDoc, Timestamp, serverTimestamp} from "firebase/firestore"
import '../CSS/Signature.css';

const Wrapper = styled.div`
    padding: 5vh 0 5vh 0;
    height: auto;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccccee;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ReportBlock = styled.div`
    height: 10vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #FFFFFF;
    padding: 0 2vw 0 2vw;
    margin-bottom: 2vh;
`

function Report() {

    //textarea value 초기화
    const [state, setState] = useState({
        name: "",
        add: "",
        birth: "",
        phone: "",
        sign:"",
        time:""
    });

    //textarea value 받기
    const handleChangeState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    };

    // 전자서명란
    const sigRef = useRef();
    const [signature, setSignature] = useState(null);
    const now = new Date().getTime().toString();
    const handleSignatureEnd = () => {
        setSignature(sigRef.current.toDataURL());
        setState({
            ...state,
            sign: sigRef.current.toDataURL('image/png'),
            time: now
        });
    }
    const clearSignature = () => {
      sigRef.current.clear();
      setSignature(null);
    }
    
    useEffect(() => {
      console.log(signature);
    }, [signature]);

    // 저장 버튼 이벤트 함수 만들기
    const handleSubmit = ()=>{
        const docRef = addDoc(collection(db, "List"),state);
        console.log(state);
        alert("저장성공");
    }

    // 취소 버튼 이벤트 함수 만들기
    const handleCancle = ()=>{
        console.log(state);
        alert("취소");
    }
    
    return (
        <Wrapper>
            <Container>
                <ReportBlock>
                    <p style={{marginTop:"0.1vh"}}>이름을 작성해주세요.</p>
                    <textarea name="name" value={state.name} onChange={handleChangeState} placeholder="이름을 작성해주세요." maxLength={5} style={{marginBottom:"0.1vh", resize:"none"}}/>
                </ReportBlock>
                <ReportBlock>
                    <p style={{marginTop:"0.1vh"}}>주소를 작성해주세요.</p>
                    <textarea name="add" value={state.add} onChange={handleChangeState} placeholder="주소를 작성해주세요." maxLength={50} style={{marginBottom:"0.1vh", resize:"none"}}/>
                </ReportBlock>
                <ReportBlock>
                    <p style={{marginTop:"0.1vh"}}>생생년월일을 작성해주세요.</p>
                    <textarea name="birth" value={state.birth} onChange={handleChangeState} placeholder="생년월일 8자리를 작성해주세요. Ex)20250108" maxLength={8} style={{marginBottom:"0.1vh", resize:"none"}}/>
                </ReportBlock>
                <ReportBlock>
                    <p style={{marginTop:"0.1vh"}}>핸드폰번호를 작성해주세요.</p>
                    <textarea name="phone" value={state.phone} onChange={handleChangeState} placeholder="-없이 핸드폰번호 11자리를 작성해주세요. Ex)01012345678" maxLength={11} form="number" style={{marginBottom:"0.1vh", resize:"none"}}/>
                </ReportBlock>
                <ReportBlock style={{width:"50vw", height:"60vw"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
                        <p style={{marginTop:"0.1vh"}}>서명(사인)을 작성해주세요.</p>
                        <SignatureCanvas 
                          penColor="black"
                          canvasProps={{className: 'signature'}}
                          ref={sigRef}
                          onEnd={handleSignatureEnd}
                        />
                        <button onClick={clearSignature}>Clear</button>
                      </div>
                </ReportBlock>
            </Container>
            <div>
                <button className="btnSave" onClick={handleSubmit} style={{backgroundColor:"#8339B3", color: "#FFFFFF", borderBlockStyle: "hidden", borderRadius: "0.3vw", marginRight: " 0.5vw"}}>저장</button>
                <button onClick={handleCancle} style={{backgroundColor:"#808080", color: "#FFFFFF", borderBlockStyle: "hidden", borderRadius: "0.3vw"}}>취소</button>
            </div>
        </Wrapper>
    )
}

export default Report