import { useState } from "react";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import Card from "./components/Card";
import Links from "./Assets/Links";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
      <Navbar />
      <CardList
        title="Top series"
        BASE_URL="https://edgemony-backend.herokuapp.com/series"
        Links={""}
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL="https://edgemony-backend.herokuapp.com/movies"
        Links={""}
        modalVisibility={onHandleModal}
      />
      <CardList
        title="My Series"
        BASE_URL=""
        Links={Links}
        modalVisibility={onHandleModal}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
      <div className="seriesFromLinks">
        <h1 className="seriesFromLinks__title">My series Alternative</h1>
        <div className="seriesfromLinks__list">
          {Links.map((serie) => (
            <Card data={serie} key={serie.id} modalVisibility={onHandleModal} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
