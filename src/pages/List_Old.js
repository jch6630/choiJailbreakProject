import { db } from '../firebase'; // Firebase 설정 및 연결
import { Buffer } from 'buffer'; // Buffer를 사용하여 Base64 데이터를 처리
import { query, orderBy, onSnapshot, collection } from 'firebase/firestore'; // Firestore 관련 함수들
import { useEffect, useState } from 'react'; // React hooks
import styled from 'styled-components'; // 스타일링을 위한 styled-components
import { jsPDF } from 'jspdf'; // PDF 생성 라이브러리
import html2canvas from 'html2canvas'; // HTML 영역을 캡처하기 위한 라이브러리
import ReactDOM from 'react-dom'; // ReactDOM 사용

// 페이지 전체 Wrapper 스타일
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  font-family: 'Noto Sans', sans-serif;
  min-height: 100vh;
  width: 100%;
`;

// 테이블 컨테이너 스타일
const TableContainer = styled.div`
  width: 1050px;
  max-width: 1200px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

// 제목 스타일
const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 테이블 스타일
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

// 테이블 행 스타일
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

// 테이블 데이터 셀 스타일
const TableCell = styled.td`
  border: 1px solid black;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// 테이블 헤더 스타일
const TableHeader = styled.th`
  background-color: #c8c8c8;
  border: 1px solid black;
  color: black;
  padding: 12px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

// PDF 다운로드 버튼 스타일
const DownloadButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 5px;

  &:hover {
    background-color: rgb(57, 126, 61);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// 로딩 메시지 스타일
const LoadingMessage = styled.div`
  font-size: 1.2rem;
  color: #666;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function List() {
  const [data, setData] = useState([]); // 명부 데이터를 저장하는 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리

  // 컴포넌트가 처음 렌더링될 때 명부 데이터를 가져옴
  useEffect(() => {
    fetchList();
  }, []);

  // Firestore에서 데이터 가져오는 함수
  const fetchList = () => {
    const q = query(collection(db, 'List'), orderBy('time')); // 'List' 컬렉션에서 시간 순으로 정렬된 데이터 가져오기
    onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => {
        const { sign, name, phone, add, birth } = doc.data();

        // Base64 이미지를 Blob URL로 변환
        const decodedURL = sign.replace(/^data:image\/\w+;base64,/, '');
        const buf = Buffer.from(decodedURL, 'base64');
        const blob = new Blob([buf], { type: 'image/png' });
        const url = URL.createObjectURL(blob);

        return { id: doc.id, name, phone, add, birth, sign: url };
      });
      setData(newData); // 변환된 데이터를 상태에 저장
      setLoading(false); // 로딩 완료
    });
  };

  // PDF 다운로드 함수
  const downloadPDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // 데이터 분할: 첫 19개 행과 이후 20개씩 나눔
    const chunkSize = 19;
    let chunkedData = [];
    let start = 0;

    while (start < data.length) {
      chunkedData.push(data.slice(start, start + chunkSize));
      start += chunkSize;
    }

    // html2canvas로 TableContainer 캡처 후 PDF에 추가
    for (let i = 0; i < chunkedData.length; i++) {
      const containerId = `table-container-${i}`;

      // TableContainer 렌더링
      const tableContainer = document.createElement('div');
      tableContainer.id = containerId;

      // ReactPortal로 JSX 렌더링하기
      ReactDOM.render(
        <TableContainer id={containerId}>
          <Title>탄원서 동의명부</Title>
          <StyledTable>
            <thead>
              <tr>
                <TableHeader>순번</TableHeader>
                <TableHeader>성명</TableHeader>
                <TableHeader>주소</TableHeader>
                <TableHeader>생년월일</TableHeader>
                <TableHeader>전화번호</TableHeader>
                <TableHeader>서명</TableHeader>
              </tr>
            </thead>
            <tbody>
              {chunkedData[i].map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.add}</TableCell>
                  <TableCell>{item.birth}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>
                    <img src={item.sign} alt="서명" width="50" height="50" />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>,
        tableContainer
      );

      // html2canvas로 캡처하여 PDF에 추가
      await html2canvas(tableContainer, {
        ignoreElements: (element) => {
          return element.tagName === 'IFRAME'; // iframe을 무시
        },
        useCORS: true, // CORS 설정을 활성화하여 외부 콘텐츠를 캡처
        allowTaint: true, // 이미지와 같은 비동기 리소스를 허용
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (i > 0) doc.addPage(); // 첫 페이지가 아니면 새 페이지 추가
        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      });

      // 일시적으로 생성된 TableContainer 제거
      ReactDOM.unmountComponentAtNode(tableContainer);
    }

    // PDF 저장
    doc.save('탄원서_동의명부.pdf');
  };

  return (
    <Wrapper>
      {/* PDF 다운로드 버튼 */}
      <DownloadButton onClick={downloadPDF}>PDF로 다운로드</DownloadButton>

      {/* 테이블 및 내용 */}
      <TableContainer id="pdfContent">
        <Title>탄원서 동의명부</Title>
        {loading ? (
          <LoadingMessage>로딩 중입니다...</LoadingMessage>
        ) : (
          <StyledTable>
            <thead>
              <tr>
                <TableHeader>순번</TableHeader>
                <TableHeader>성명</TableHeader>
                <TableHeader>주소</TableHeader>
                <TableHeader>생년월일</TableHeader>
                <TableHeader>전화번호</TableHeader>
                <TableHeader>서명</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.add}</TableCell>
                    <TableCell>{item.birth}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      <img src={item.sign} alt="서명" width="50" height="50" />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="6">작성된 명부가 없습니다.</TableCell>
                </TableRow>
              )}
            </tbody>
          </StyledTable>
        )}
      </TableContainer>
    </Wrapper>
  );
}

export default List;
