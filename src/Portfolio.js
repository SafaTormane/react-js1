import React from "react";
import img from "./Images/photo1.jpg";
const Portfolio = () => {
  return (
    <div>
      <section className="main">
        div
        <div className="cards">
          <div className="card">
            <img src={img} alt="" />
            <div className="card-header">
              <h4 className="title">
                Vernis permanent
                <span className="card-title">20dt</span>
              </h4>
              <div className="container">
                <div className="myButton">
                  <button className="btn-ajouter-class" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur-class" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="images/photo4.jpg" alt="" />
            <div className="card-header">
              <h4 className="title">
                Capsules+gel+vernis permanant
                <span className="card-title">40dt</span>
              </h4>
              <div className="container">
                <div className="btn">
                  <button className="btn-ajouter" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="images/photo1.jpg" alt="" />
            <div className="card-header">
              <h4 className="title">
                Capsules+gel+vernis permanant
                <span className="card-title">40dt</span>
              </h4>
              <div className="container">
                <div className="btn">
                  <button className="btn-ajouter" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="images/photo2.jpg" alt="" />
            <div className="card-header">
              <h4 className="title">
                Gel sur ongles naturelles
                <span className="card-title">30dt</span>
              </h4>
              <div className="container">
                <div className="btn">
                  <button className="btn-ajouter" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="images/photo8.jpg" alt="" />
            <div className="card-header">
              <h4 className="title">
                Gel sur ongles naturelles
                <span className="card-title">30dt</span>
              </h4>
              <div className="container">
                <div className="btn">
                  <button className="btn-ajouter" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="images/photo9.jpg" alt="" />
            <div className="card-header">
              <h4 className="title">
                Vernis permanent
                <span className="card-title">20dt</span>
              </h4>
              <div className="container">
                <div className="btn">
                  <button className="btn-ajouter" id="btn-ajouter-id">
                    Ajoutez au panier
                  </button>
                  <button className="btn-coeur" id="btn-coeur-id">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
