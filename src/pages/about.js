import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Dobrý den</h2>
        <p></p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Pár slov o mně</h3>
          <p>
            Lidi mě fascinovali odjakživa. I proto jsem studoval společnské vědy.
            Nejdříve ekonomii a potom i psychologii. Absolvoval jsem výcvik v koučinku
            a aktuálně jsem ve výcviku Integrace v psychoterapii.   

          </p>

          <hr />

          <h4>Jak pracuji</h4>
          <p>
            Pracuji různě. Jezdím za klienty, zvu je k sobě do pracovny, chodím 
            s nimi na procházky, na kafe, setkávám se s nimi online. Vše záleží 
            na dohodě. Společně hledáme způsob práce, který by nám vyhovoval.
          </p>

          <p>
            Můj teoretický základ čerpá z více teoretických základů. Společně 
            s klientem se snažím najít postup, který nám oběma bude nejvíce 
            vyhovat. Nepopírám, že fáze společného hledání není jednoduchá, jsem 
            ale přesvědčen, že to svoje ovoce přináší.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
