import { db } from '../firebase';
import { Buffer } from 'buffer';
import { query, orderBy, onSnapshot, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Wrapper = styled.div`
  padding: 5vh 0;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-family: 'Noto Serif', serif;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 10vh 0;
  }
`;

const TableBack = styled.div`
  padding: 3vw;
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Noto Serif', serif;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    padding: 5vw;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  font-family: 'Noto Serif', serif;
  table-layout: fixed;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledTdTh = styled.td`
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: center;
  font-size: 1rem;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #666;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

const SignImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const columnWidths = {
  seq: '8%',
  name: '12%',
  address: '40%',
  birth: '16%',
  phone: '22%',
  sign: '12%',
};

const DownloadButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCall();
  }, []);

  const listCall = async () => {
    const q = query(collection(db, 'List'), orderBy('time'));
    onSnapshot(q, (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const transformedData = contentArray.map((content) => {
        const { sign, name, phone, add, birth } = content;

        const decodedURL = sign.replace(/^data:image\/\w+;base64,/, '');
        const buf = Buffer.from(decodedURL, 'base64');
        const blob = new Blob([buf], { type: 'image/png' });
        const file = new File([blob], `${name}_${phone}.png`, {
          type: 'image/png',
        });
        const url = URL.createObjectURL(file);

        return {
          name,
          add,
          birth,
          phone,
          sign: url,
        };
      });

      setData(transformedData);
      setLoading(false);
    });
  };

  // PDF 다운로드 함수
  const downloadPDF = () => {
    const input = document.getElementById('pdfContent'); // TableBack 영역을 PDF로 변환

    // 캔버스 크기 조정
    html2canvas(input, {
      scale: 2, // 고해상도 캡처
      width: input.scrollWidth, // scroll width로 캡처
      height: input.scrollHeight, // scroll height로 캡처
      x: 0, // 캔버스 x 위치
      y: 0, // 캔버스 y 위치
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight =
        (canvas.height * pdf.internal.pageSize.width) / canvas.width;

      let y = 0;

      // 첫 번째 페이지 추가
      pdf.addImage(
        imgData,
        'PNG',
        0,
        y,
        pdf.internal.pageSize.width,
        imgHeight
      );

      // 페이지가 넘어가면 새 페이지 추가
      while (y + imgHeight > pageHeight) {
        y = 0;
        pdf.addPage();
        pdf.addImage(
          imgData,
          'PNG',
          0,
          y,
          pdf.internal.pageSize.width,
          imgHeight
        );
      }

      pdf.save('tableback_image.pdf'); // PDF 파일 다운로드
    });
  };

  return (
    <Wrapper>
      {/* PDF 다운로드 버튼을 TableBack 상단에 위치시킴 */}
      <DownloadButton onClick={downloadPDF}>PDF로 다운로드</DownloadButton>
      <TableBack id="pdfContent">
        <Title>탄원서 동의명부</Title>
        <Description>
          본인은 상기 탄원인과 뜻을 같이하여 피고인 최정원이 바른길을 갈 수
          있도록 선도하며, 교화에 적극적으로 동참하고 협조하겠습니다. 아무쪼록
          재판장님과 검사님의 너그러운 선처 부탁드립니다.
        </Description>

        {loading ? (
          <LoadingText>로딩 중...</LoadingText>
        ) : (
          <StyledTable>
            <thead>
              <tr>
                <StyledTdTh style={{ width: columnWidths.seq }}>
                  순번
                </StyledTdTh>
                <StyledTdTh style={{ width: columnWidths.name }}>
                  성명
                </StyledTdTh>
                <StyledTdTh style={{ width: columnWidths.address }}>
                  주소
                </StyledTdTh>
                <StyledTdTh style={{ width: columnWidths.birth }}>
                  생년월일
                </StyledTdTh>
                <StyledTdTh style={{ width: columnWidths.phone }}>
                  전화번호
                </StyledTdTh>
                <StyledTdTh style={{ width: columnWidths.sign }}>
                  서명
                </StyledTdTh>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id}>
                    <StyledTdTh style={{ width: columnWidths.seq }}>
                      {index + 1}
                    </StyledTdTh>
                    <StyledTdTh style={{ width: columnWidths.name }}>
                      {item.name}
                    </StyledTdTh>
                    <StyledTdTh style={{ width: columnWidths.address }}>
                      {item.add}
                    </StyledTdTh>
                    <StyledTdTh style={{ width: columnWidths.birth }}>
                      {item.birth}
                    </StyledTdTh>
                    <StyledTdTh style={{ width: columnWidths.phone }}>
                      {item.phone}
                    </StyledTdTh>
                    <StyledTdTh style={{ width: columnWidths.sign }}>
                      <SignImage src={item.sign} alt="서명" />
                    </StyledTdTh>
                  </tr>
                ))
              ) : (
                <tr>
                  <StyledTdTh colSpan="6">작성된 명부가 없습니다.</StyledTdTh>
                </tr>
              )}
            </tbody>
          </StyledTable>
        )}
      </TableBack>
    </Wrapper>
  );
}

export default List;
