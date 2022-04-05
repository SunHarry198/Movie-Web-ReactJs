import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import Routes from "./config/Routes";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes />
      <Header />
      <Footer />
    </>
  );
}

export default App;
