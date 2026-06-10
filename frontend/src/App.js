import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortofolioScreen from "./screens/PortofolioScreen"; // باقي الصفحة (Hero + sections)

const App = () => {
  return (
    <>
      {/* Header ثابت */}
      <Header />

      {/* الصفحة الرئيسية (Portfolio) */}
      <main>
        <PortofolioScreen />
      </main>

      {/* Footer ثابت */}
      <Footer />
    </>
  );
};

export default App;