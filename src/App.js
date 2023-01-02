import './App.css';
import ProductSetupLayout from "./ProductSetupLayout.js"

const warningOnPageReload = () => {
  window.onbeforeunload = function() {
    return "Are you sure?";
  };
  
  window.onkeydown = function(event) {
    if (event.keyCode === 116) {
      window.location.reload();
    }
  };
}

function App() {
  warningOnPageReload()

  return (
    <div className="App">
      <ProductSetupLayout />
    </div>
  );
}

export default App;
