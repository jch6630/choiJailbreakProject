import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccccee;
`

function Main() {
    return (
        <Wrapper>
            <div style={{marginBottom:"1%"}}>
                안녕하세요. 당신은 최정원의 탄원서 동의을 희망하십니까?
            </div>
            <Link to="/Report">
                <button style={{backgroundColor:"#8339B3", color: "#FFFFFF", borderBlockStyle: "hidden", borderRadius: "0.3vw"}}>동의</button>
            </Link>
        </Wrapper>
    )
}

export default Main