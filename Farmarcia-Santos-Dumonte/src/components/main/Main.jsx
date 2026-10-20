import { useState } from "react";
import "./Main.css";

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";

function Main() {
  const banners = [Banner1, Banner2, Banner3];
  const [bannerAtual, setBannerAtual] = useState(0);

  function anterior() {
    setBannerAtual((atual) =>
      atual === 0 ? banners.length - 1 : atual - 1
    );
  }

  function proximo() {
    setBannerAtual((atual) =>
      atual === banners.length - 1 ? 0 : atual + 1
    );
  }

  return (
    <main className="main">
      <section className="banner">
        <button className="seta" onClick={anterior}>
          ←
        </button>

        <div className="banner-conteudo">
          <img src={banners[bannerAtual]} alt={`Banner ${bannerAtual + 1}`} />
        </div>

        <button className="seta" onClick={proximo}>
          →
        </button>
      </section>

      <section className="produtos">
        <h2>Produtos</h2>

        <div className="produtos-lista">
          <div className="produto-card"></div>
          <div className="produto-card"></div>
          <div className="produto-card"></div>
          <div className="produto-card"></div>
          <div className="produto-card"></div>
        </div>
      </section>
    </main>
  );
}

export default Main;