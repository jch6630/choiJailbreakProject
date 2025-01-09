import { db } from "../firebase";
import { Buffer } from "buffer";
import { query, orderBy, onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5vh 0 5vh 0;
  height: auto;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ccccee;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const TableBack = styled.div`
  padding: 1vw;
  height: auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const StyledTable = styled.table`
  border-collapse: collapse; /* 테이블 셀 간 경계 겹침 방지 */
  width: 100%;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const StyledTdTh = styled.td`
  border: 1px solid black; /* 테이블 셀에 검정 선 추가 */
  padding: 8px;
  text-align: center;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #666;
  font-family: 'Noto Serif', serif; /* 명조체로 설정 */
`;

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCall();
  }, []);

  const listCall = async () => {
    const q = query(collection(db, "List"), orderBy("time"));
    onSnapshot(q, (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const transformedData = contentArray.map((content) => {
        const { sign, name, phone, add, birth } = content;

        // 이미지 파일 변환
        const decodedURL = sign.replace(/^data:image\/\w+;base64,/, "");
        const buf = Buffer.from(decodedURL, "base64");
        const blob = new Blob([buf], { type: "image/png" });
        const file = new File([blob], `${name}_${phone}.png`, { type: "image/png" });
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

  return (
    <Wrapper>
      <TableBack>
        <Title>탄원서 동의명부</Title>
        <Description>
          본인은 상기 탄원인과 뜻을 같이하여 피고인 최정원이 바른길을 갈 수 있도록 선도하며, 교화에 적극적으로 동참하고 협조하겠습니다. 아무쪼록 재판장님과 검사님의 너그러운 선처 부탁드립니다.
        </Description>

        {loading ? (
          <LoadingText>로딩 중...</LoadingText>
        ) : (
          <StyledTable>
            <thead>
              <tr>
                <StyledTdTh>순번</StyledTdTh>
                <StyledTdTh>성명</StyledTdTh>
                <StyledTdTh>주소</StyledTdTh>
                <StyledTdTh>생년월일</StyledTdTh>
                <StyledTdTh>전화번호</StyledTdTh>
                <StyledTdTh>서명</StyledTdTh>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id}>
                    <StyledTdTh>{index + 1}</StyledTdTh>
                    <StyledTdTh>{item.name}</StyledTdTh>
                    <StyledTdTh>{item.add}</StyledTdTh>
                    <StyledTdTh>{item.birth}</StyledTdTh>
                    <StyledTdTh>{item.phone}</StyledTdTh>
                    <StyledTdTh>
                      <img
                        src={item.sign}
                        alt="Blob File"
                        style={{ width: "5vw", height: "5vw" }}
                      />
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
