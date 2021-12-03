import { observer } from "mobx-react-lite";
import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import HowItWork from "./components/HowItWork/HowItWork";
import Overview from "./components/Overview/Overview";
import Product from "./components/Product/Product";
import StepInstruction from "./components/StepInstruction/StepInstruction";
import Store from "./store/Store";

const App = observer(() => {
  const { isProductSelected } = Store;

  return (
    <>
      <Banner />
      <div className="container">
        {isProductSelected ? (
          <StepInstruction />
        ) : (
          <>
            <Product />
            <Overview />
          </>
        )}

        <HowItWork />

      </div>
      <Footer />
    </>
  );
});

export default App;
