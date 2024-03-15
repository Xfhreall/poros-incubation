import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
