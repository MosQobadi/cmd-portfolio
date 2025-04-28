import FloatingContent from "./components/floatingContent/FloatingContent";
import MatrixBackground from "./components/matrixBackground/MatrixBackground";
import FloatingBox from "./components/floatingBox/FloatingBox";

function App() {
  return (
    <div>
      <MatrixBackground />
      <FloatingBox>
        <FloatingContent />
      </FloatingBox>
    </div>
  );
}

export default App;
