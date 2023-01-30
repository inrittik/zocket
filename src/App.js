import Sidebar from "./components/sidebar";
import Titlebar from "./components/titlebar";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="sidebar-cnt">
        <Sidebar />
      </div>
      <div className="main">
        <Titlebar />
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
