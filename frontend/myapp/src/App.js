import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb"; // ✅ Correct import path

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb /> 
      <MainLayout>
        
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;
