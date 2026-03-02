import LandingPage from "./pages/Landing.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        DARK MODE TEST
      </div>
      <div>
        <h1>Hello</h1>
      </div>
      <LandingPage />
    </>
  );
}
export default App;