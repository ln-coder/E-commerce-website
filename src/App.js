import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Navigation from "./customer/components/Navigation";

function App() {
  return (
    <div>
      <div className="">
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
