import React, { Component } from "react";
import printer from '../../assets/images/equipments/printer.jpg'
import printer2 from '../../assets/images/equipments/printer2.jpg'
import PlotterRecorte from '../../assets/images/equipments/PlotterRecorte.jpg'
import fresadora from '../../assets/images/equipments/fresadora.jpg'
import plotterImpressão from '../../assets/images/equipments/plotterImpressão.jpg'
import bancadaEletrônica from '../../assets/images/equipments/bancadaEletrônica.jpg'
import laserCutter from '../../assets/images/equipments/laserCutter.jpg'
import extrusoraFilamento from '../../assets/images/equipments/extrusoraFilamento.jpg'
import './index.css'

export default class Equipment extends Component {
  render() {
    return (
      <div id="equipment" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Equipamentos</h2>
          </div>
          <div className="row">
            <div className="equipment-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={printer}
                      title="impressora"
                      data-lightbox-equipments="equipments1"
                    >
                      <div className="hover-text">
                        <h4>2 Impressoras 3D Wanhao<br></br>Duplicator 4 </h4>
                        <span> 2 extrusores<br></br>
                          filamento 1.75mm<br></br>
                          camada entre 0.1 e 0.5mm<br></br>
                          área: 225mm x 145mm x 150mm<br></br>
                          base aquecida<br></br>
                        </span>
                      </div>
                      <img
                        src={printer}
                        className="img-responsive"
                        alt="impressora"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={printer2}
                      title="impressora 2"
                      data-lightbox-equipments="equipments2"
                    >
                      <div className="hover-text">
                        <h4>1 Impressora 3D printrbot<br></br>simple metal </h4>
                        <span>
                          filamento de 1.75mm<br></br>
                          resolução de camada entre 0.1 e 0.5mm<br></br>
                          área de trabalho: 152mm x 152mm x 152mm<br></br>
                        </span>
                      </div>
                      <img
                        src={printer2}
                        className="img-responsive"
                        alt="impressora 2"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={PlotterRecorte}
                      title="Plotter Recorte"
                      data-lightbox-equipments="equipments4"
                    >
                      <div className="hover-text">
                        <h4>1 Plotter de Recorte<br></br>SAGA 720i</h4>
                        <span>
                          largura máxima da mídia: 72cm<br></br>
                          largura máxima de corte: 62cm<br></br>
                          laser point<br></br>
                          velocidade: 600mm/s<br></br>
                          precisão de repetição: 0.082mm<br></br>
                        </span>
                      </div>
                      <img
                        src={PlotterRecorte}
                        className="img-responsive"
                        alt="Plotter Recorte"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={fresadora}
                      title="Fresadora"
                      data-lightbox-equipments="equipments5"
                    >
                      <div className="hover-text">
                        <h4>1 Fresadora MTC-200×250<br></br>(não operacional)</h4>
                        <span>
                          área: 200mm x 250mm<br></br>
							eixo z: 150mm<br></br>
							refrigeração do motor a ar<br></br>
							velocidade de rotação programável<br></br>
                        </span>
                      </div>
                      <img
                        src={fresadora}
                        className="img-responsive"
                        alt="Fresadora"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={plotterImpressão}
                      title="Plotter de Impressão"
                      data-lightbox-equipments="equipments7"
                    >
                      <div className="hover-text">
                        <h4>1 Plotter de Impressão<br></br>HP T520<br></br>não operacional</h4>
                        <span>
                          alimentação por rolo ou folha<br></br>
                          largura de impressão: 61cm<br></br>
                          espessura: até 11.8 milésimos de polegada<br></br>
                          resolução de impressão: 2400 x 1200 dpi<br></br>
                        </span>
                      </div>
                      <img
                        src={plotterImpressão}
                        className="img-responsive"
                        alt="Plotter de Impressão"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={bancadaEletrônica}
                      title="Bancada de Eletrônica"
                      data-lightbox-equipments="equipments8"
                    >
                      <div className="hover-text">
                        <h4>Bancada de Eletrônica</h4>
                        <span>
                          osciloscópio<br></br>
                          fonte de bancada<br></br>
                          estação de solda<br></br>
                          componentes eletrônicos diversos<br></br>
                        </span>
                      </div>
                      <img
                        src={bancadaEletrônica}
                        className="img-responsive"
                        alt="Bancada de Eletrônica"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={laserCutter}
                      title="Cortadora Laser"
                      data-lightbox-equipments="equipments3"
                    >
                      <div className="hover-text">
                        <h4>1 Cortadora Laser<br></br>CMA6040</h4>
                        <span>
                          área de corte de 60cm x 40cm<br></br>
                          potência do laser: 70-80W<br></br>
                          Espessura do corte: 0-25mm para acrílico<br></br>
                          Precisão &lt; 0.01mm<br></br>
                        </span>
                      </div>
                      <img
                        src={laserCutter}
                        className="img-responsive"
                        alt="Cortadora Laser"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="equipment-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={extrusoraFilamento}
                      title="Extrusora Filamento"
                      data-lightbox-equipments="equipments6"
                    >
                      <div className="hover-text">
                        <h4>1 Extrusora de filamento modelo filabot wee</h4>
                        <span>
                          bico de extrusão de 1.75mm<br></br>
                          adequado para ABS e PLA<br></br>
                          taxa de extrusão entre 13 e 51 cm/minuto<br></br>
                        </span>
                      </div>
                      <img
                        src={extrusoraFilamento}
                        className="img-responsive"
                        alt="Extrusora Filamento"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}