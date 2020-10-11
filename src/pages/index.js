import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div></div>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="cta">
              <a href="/#" className="button primary">
                Kontakt
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Dozvědět se více
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Psychoterapie | poradenství | diagnostika
          </h2>
          <p>
            Nabízím odbornou psychologickou pomoc v obtížných situacích,
            <br />
            ale i při poznávání sebe sama a osobním rozvoji.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-heart major style2">
              <span className="label">Psychoterapie</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-user-friends major style3">
              <span className="label">Poradenství</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-gem major style1">
              <span className="label">Diagnostika</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Psychoterapie
          </h2>
          <p>
            Ať už stojíte před složitým životním rozhodnutím, řešíte vztahové, nebo 
            osobní problémy, procházíte složitým životním obdobím a hledáte pomoc. Ozvěte se.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Poradenství
          </h2>
          <p>
            Pokud chcete pracovat na tom, aby se vám práci dařilo lip, zvládali jste stres,
            nebo chcete pracovat s celým svým týmem. Ozvěte se.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Diagnostika
          </h2>
          <p>
            Diagnostika je většinou součást rozsáhlejší spolupráce. Mám rád psychologickou práci
            postavenou na důkazech. Pokud jste na sebe zvědaví a chcete na sobě pracovat, ozvěte se.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Nejčastější otázky</h2>
          <p>
            Pokud máte jakýkoliv jiný dotaz, pište na&nbsp;
            <a href="mailto:mail@tomasnovacek.com?Subject=dotaz%20z%20webu" target="_top">email.</a> 
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-user">
            <h3>Než se setkáme</h3>
            <p>
              Jsem aktuálně ve výcviku v Integrace v psychoterapii. Je to humanitní 
              směr postavený na hledání ideální terapie pro konkrétního klienta a 
              terapeuta.
            </p>
          </li>
          <li className="icon solid fa-address-card">
            <h3>První kontakt</h3>
            <p>
              První kontakt probíhá obvykle emailem, telefonicky, nebo rovnou osobně,
              pokud se objednáte v rezervačním systému.
            </p>
          </li>
          <li className="icon solid fa-user-friends">
            <h3>První setkání</h3>
            <p>
              Na prvním setkání máme možnost se více poznat a domluvit si zakázku. Jde 
              o to, zkusit si, jestli by nám to společně šlo.
            </p>
          </li>
          <li className="icon solid fa-calendar-alt">
            <h3>Jak se objednat</h3>
            <p>
              Nejjednodušší cesta je vybrat si volný termín v rezervačním systému. Můžete 
              také napsat email, nebo si můžeme v urgentních případech zavolat.
            </p>
          </li>
          <li className="icon solid fa-link">
            <h3>Zajímavé odkazy</h3>
            <p>
              ČAP, <a href="https://https://www.psychoterapie-integrace.cz">Integrace v psychoterapii</a>, EAP
            </p>
          </li>
          <li className="icon solid fa-money-bill">
            <h3>Ceník</h3>
            <p>
              Cena pro individuální 50 minutovou konzultaci je 600 Kč. Při práci se skupinou
              se domlouváme individuálně.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Kontakt</h2>
          <p>
            Rezervujte si setkání <a href="https://calendly.com/tomas-novacek/setkani-1">zde </a> 
            nebo napište <a href="mailto:mail@tomasnovacek.com?Subject=kontakt%20z%20webu" target="_top">email</a>.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="mailto:mail@tomasnovacek.com" className="button fit primary">
              Poslat <a href="mailto:mail@tomasnovacek.com?Subject=kontakt%20z%20webu" target="_top">email</a>
            </a>
          </li>
          <li>
            <a href="/About" className="button fit">
              Více o mně
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
