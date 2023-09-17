import { useState } from 'react';
import React from 'react'

const Body = () => {
  return (
    <div>
        <article className="row p-0 d-flex align-items-center mt-5 col-md-12" >
            <section className="my-3 col-md-8">
                <h1 className="display-4">Green buildings, edifícios sustentáveis com beneficios para você e sua empresa.
                </h1>
            </section>

            <section className="my-3 col-md-4 ">
                <p className="">Edifícios verdes podem mudar o mundo de diversas maneiras. Ao construir edifícios que são
                    projetados para serem mais eficientes em termos energéticos e com materiais sustentáveis, podemos
                    reduzir significativamente as emissões de gases de efeito estufa.</p>
            </section>
        </article>

        <article className="row mt-5 ms-0 col-12" id="EcoBuild">
            <figure className="">
                <img className="img-fluid p-0 m-0"
                    src="./src/assets/img/vista-da-cidade-com-predios-de-apartamentos-e-vegetacao-verde.jpg"
                    alt="terraço edifício verde"/>
            </figure>
        </article>

        <article className="row p-0 mt-5 d-flex align-items-center" id="missão">
            <section className="col-md-6 my-3">
                <h1 className="display-4">A Vida Sustentável Começa Aqui.</h1>
                <h3 className="mt-5 fw-light">Na EcoBuild, acreditamos que a vida sustentável não deve ser um luxo. É por
                    isso que nos dedicamos a fornecer soluções acessíveis para ajudar a construir ou transformar a sua
                    casa num espaço de vida sustentável que beneficie tanto você como o planeta</h3>
            </section>
        </article>

        <article  className="row p-0 mt-5 d-flex align-items-center col-md-12 mb-5" id="projetos">
        <section  className="col-12 col-md-6">
                <div  className="col-6 col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Projetos</h5>
                        <p className=" mt-3 card-text">Os projetos são realizados por uma equipe de profissionais
                            experientes e altamente qualificados, incluindo engenheiros, arquitetos, especialistas em
                            contrução sustentável e outros consultores. A empresa segue um processo colaborativo e
                            personalizado para cada projeto.</p>
                        <a href="#" className=" mt-3 btn btn-dark">Veja tudo</a>
                    </div>
                </div>
                <figure className=" mt-4 col-6 col-md-6 ">
                    <img className="img-fluid" src="./src/assets/img/project1.png" alt="Edifício verde visão frontal"/>
                </figure>
            </section>

            <section className="col-6 col-md-6">
                <figure className=" ">
                    <img className="img-fluid" src="./src/assets/img/project2.png" alt="Visão diagonal edifício verde"/>
                </figure>
            </section>
        </article>

        <section className="row mt-5" id="benefícios">
            <div className="container-fluid">
                <h1 className="text-center">Benefícios do nosso serviço</h1>
                <p className="text-center">Construir edifícios verdes com a Ecobuild oferece uma série de benefícios
                    significativos.</p>
                <div className=" row gy-4 mt-4 mb-5 ">
                   
                    <div className=" col-12 col-md-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Redução de Custo</h5>
                                <p className="card-text">Isso significa que podem economizar significativamente nos custos
                                    de
                                    energia ao longo do tempo, ajudando a reduzir os gastos com eletricidade,
                                    aquecimento e
                                    refrigeração.</p>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-light fw-bold">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                
                    <div className=" col-12 col-md-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Valorização de Imóvel</h5>
                                <p className="card-text">Os edifícios verdes têm um grande apelo no mercado imobiliário,
                                    isso
                                    pode ajudar a aumentar o valor do imóvel e a garantir uma maior rentabilidade a
                                    longo
                                    prazo.</p>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-light fw-bold">Saiba mais</a>
                            </div>
                        </div>
                    </div>
                
                    <div className=" col-12 col-md-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Certificação LEED</h5>
                                <p className="card-text">Ter a certificação possui diversos pontos positivos, como:
                                    diminuição
                                    de custos operacionais e riscos regulatórios; valorização do imóvel; uso de
                                    materiais e
                                    tecnologias de baixo impacto ambiental; aumento da satisfação e bem estar de
                                    usuários
                                    entre outros.</p>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-light fw-bold">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>

        <section class="container-fluid bg-dark rounded mt-5 pt-5 p-4 text-center text-white">
            <h1 class="my-3">A mudança começa com você!</h1>
            <p class="my-3">Baixe agora o aplicativo da Ecobuild e faça parte da solução para a construção de um futuro
                mais verde e sustentável.</p>
            <a href="#" class="btn btn-dark btn-md my-3">BAIXE O APLICATIVO</a>
        </section>

        <section className="mt-5 pt-5 mb-5 pb-5" id="feedback">
      <div className="container px-4">
        <h1 className="text-center">O que nossos clientes dizem?</h1>
        <div className="row gx-5">
          <div className="col d-flex">
            <div className="p-5 border rounded bg-light d-flex flex-fill">
              <img src="./src/assets/img/avatar1.png" alt="user1" className="img-fluid rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
              <div className="media-body">
                <p className="ps-3">Como uma empresa comprometida com a sustentabilidade, escolhemos a
                  Ecobuild para nos
                  ajudar a construir nosso novo escritório. O resultado final foi uma obra-prima
                  sustentável que estamos orgulhosos de chamar de nosso escritório!</p>
                <h3 className="ps-3">Lucas Rodrigues</h3>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="p-5 border rounded bg-light d-flex flex-fill">
              <img src="./src/assets/img/avatar2.png" alt="user1" className="img-fluid rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
              <div className="media-body">
                <p className="ps-3">A Ecobuild foi fundamental para tornar meu sonho de ter uma casa
                  sustentável uma realidade. O processo de construção foi transparente e eficiente, e
                  o resultado final superou minhas expectativas. Recomendo fortemente a Ecobuild para
                  quem deseja construir uma casa verde!</p>
                <h3 className="ps-3">Joana da Silva</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  )}

export default Body