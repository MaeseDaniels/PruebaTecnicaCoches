import React from 'react';
import car from '../../assets/coche.png';
import hamilton from '../../assets/Hamilton.png';
import bottas from '../../assets/Bottas.png';
import ing from '../../assets/ing.svg';
import fin from '../../assets/fin.svg';
import articleImg from '../../assets/foto_noticia.jpg';

import "./Body.scss";


const Body = props => {

  return (
    <div className="Body">
      <section className="Body__section first">

        <div className="Body__section__text">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et euismod nisl. Aenean nunc turpis, ornare efficitur consectetur eu, mollis at est. Ut consectetur, neque in commodo pharetra, dolor mi placerat tellus, quis feugiat ipsum augue at nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam dapibus semper est, id dignissim lacus consectetur et. Nulla facilisi. Nulla consequat risus ut porta consectetur. Sed facilisis velit nisl, sed posuere ante malesuada nec. Quisque interdum vehicula velit eu hendrerit. Morbi vestibulum magna quis leo blandit bibendum. Phasellus elementum erat ac laoreet dapibus. Donec eget neque eget nibh venenatis commodo a in risus. Pellentesque sollicitudin purus vel ornare pretium. Pellentesque vel mi leo. Aliquam nec feugiat nibh.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et euismod nisl. Aenean nunc turpis, ornare efficitur consectetur eu, mollis at est. Ut consectetur, neque in commodo pharetra.
          </p>
        </div>
        <div className="Body__section__charts">
          <div className="chart">
            <div className="chart__label">Points</div>
            <div className="donut-chart chart1">
              <div className="slice one"></div>
              <div className="slice two"></div>
              <div className="chart-center">
                <span className="chart-center__text"></span>
              </div>
            </div>
          </div>
          <div className="chart">
            <div className="chart__label">Podium</div>
            <div className="donut-chart chart2">
              <div className="slice one"></div>
              <div className="slice two"></div>
              <div className="chart-center">
                <span className="chart-center__text"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Body__section second">
        <div className="wrap">
          <div className="wrap__container">
            <div className="Body__section__pilots">
              <div className="aux">
                <div className="pilot">
                  <img className="pilot__img" src={bottas} alt="Bottas" />
                  <div className="pilot__circle"></div>
                  <div className="pilot__flag">
                    <img className="pilot__flag__img" src={fin} alt="Bottas"/>
                  </div>
                </div>
                <div className="text">
                  <p className="text__name">Valteri</p>
                  <p className="text__lastname">BOTTAS</p>
                </div>
              </div>
              <div className="aux">
                <div className="pilot">
                  <img className="pilot__img" src={hamilton} alt="Hamilton" />
                  <div className="pilot__circle"></div>
                  <div className="pilot__flag">
                    <img className="pilot__flag__img" src={ing} alt="Hamilton"/>
                  </div>
                </div>
                <div className="text">
                  <p className="text__name">Lewis</p>
                  <p className="text__lastname">HAMILTON</p>
                </div>
              </div>
              
            </div>
            <div className="Body__section__cars">
              <div className="car">
                <img src={car} className="car__img" alt="coche"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Body__section third">
        <div className="article">
          <div className="article__img">
            <img className="article__img__item" src={articleImg} alt="noticia"/>
          </div>
          <div className="article__title">
            <h4 className="article__title__red">DTM</h4>
            <h3 className="article__title__blue">Nürburgring</h3>
          </div>
          <div className="article__desc">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et euismod nisl. Aenean nunc turpis, ornare efficitur consectetur eu, mollis at est. Ut consectetur, neque in commodo pharetra.
            </p>
          </div>
        </div>    

        <div className="article">
          <div className="article__img">
            <img className="article__img__item" src={articleImg} alt="noticia"/>
          </div>
          <div className="article__title">
            <h4 className="article__title__red">DTM</h4>
            <h3 className="article__title__blue">Nürburgring</h3>
          </div>
          <div className="article__desc">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et euismod nisl. Aenean nunc turpis, ornare efficitur consectetur eu, mollis at est. Ut consectetur, neque in commodo pharetra.
            </p>
          </div>
        </div>    

        <div className="article">
          <div className="article__img">
            <img className="article__img__item" src={articleImg} alt="noticia"/>
          </div>
          <div className="article__title">
            <h4 className="article__title__red">DTM</h4>
            <h3 className="article__title__blue">Nürburgring</h3>
          </div>
          <div className="article__desc">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et euismod nisl. Aenean nunc turpis, ornare efficitur consectetur eu, mollis at est. Ut consectetur, neque in commodo pharetra.
            </p>
          </div>
        </div>    

      </section>
    </div>
  );

}

export default Body;