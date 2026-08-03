const whatsappBase = "https://wa.me/5541998212149";

const whatsappOrder = `${whatsappBase}?text=${encodeURIComponent(
  "Oi, Fernanda! Quero montar um kit artesanal da Herbarium."
)}`;

const whatsappSoaps = `${whatsappBase}?text=${encodeURIComponent(
  "Oi, Fernanda! Quero saber quais sabonetes artesanais estão disponíveis."
)}`;

const whatsappCandles = `${whatsappBase}?text=${encodeURIComponent(
  "Oi, Fernanda! Quero conhecer as velas aromáticas da Herbarium."
)}`;

const whatsappFootSoak = `${whatsappBase}?text=${encodeURIComponent(
  "Oi, Fernanda! Quero saber sobre o escalda-pés artesanal."
)}`;

const whatsappProducts = `${whatsappBase}?text=${encodeURIComponent(
  "Oi, Fernanda! Quero conhecer os produtos artesanais da Herbarium."
)}`;

const instagram = "https://www.instagram.com/herbarium.artesanal/";

const products = [
  {
    title: "Sabonetes artesanais",
    image: "/images/sabonetes-coracao.webp",
    alt: "Sabonetes artesanais coloridos em formato de coração",
    tag: "Banho ritual",
    text: "Para banho, lembrancinhas e kits: peças perfumadas, delicadas e feitas em pequenos lotes.",
    cta: "Quero sabonetes",
    href: whatsappSoaps,
  },
  {
    title: "Velas aromáticas",
    image: "/images/vela-capim-limao.webp",
    alt: "Vela aromática Herbarium de capim-limão em copo de vidro",
    tag: "Casa perfumada",
    text: "Para casa, presente e ritual de descanso: aromas que criam clima e deixam o ambiente mais acolhedor.",
    cta: "Quero velas",
    href: whatsappCandles,
  },
];

const trustItems = [
  "Feito à mão em Curitiba",
  "Atendimento direto com a Fernanda",
  "Kits personalizados",
  "Retirada ou envio a combinar",
];

const occasions = [
  "Autocuidado",
  "Presentes afetivos",
  "Lembrancinhas",
  "Datas especiais",
  "Kits personalizados",
];

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="Topo">
        <a className="brand-mark" href="#inicio" aria-label="Herbarium - início">
          <img src="/images/logo-da-marca.webp" alt="" />
          <span>
            <strong>Herbarium</strong>
            <small>Saboaria botânica</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#presentes">Presentes</a>
          <a href="#historia">História</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero botanical-frame" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/kit-sabonetes-vela.webp"
            alt="Kit artesanal Herbarium com vela aromática e sabonetes em formato de coração"
          />
          <div className="hero-overlay" />
          <div className="mystic-orbit" aria-hidden="true">
            <span>☾</span>
            <span>✦</span>
            <span>☽</span>
          </div>
          <div className="hero-content">
            <p className="eyebrow">Saboaria botânica | Feito à mão em Curitiba</p>
            <h1 id="hero-title">Herbarium</h1>
            <p className="hero-subtitle">
              Sabonetes, velas aromáticas, escalda-pés e kits artesanais para
              autocuidado e presentes.
            </p>
            <div className="hero-actions" aria-label="Ações principais">
              <a className="button primary" href={whatsappOrder} target="_blank" rel="noreferrer">
                Montar meu kit pelo WhatsApp
              </a>
              <a className="button ghost" href={instagram} target="_blank" rel="noreferrer">
                Ver Instagram
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Essência da marca">
            <img src="/images/logo-da-marca.webp" alt="" />
            <p>Banhos, aromas e pausas que se transformam em ritual.</p>
          </aside>
        </section>

        <section className="ritual-strip" aria-label="Diferenciais artesanais">
          <span>☿ Pequenos lotes</span>
          <span>✧ Aromas afetivos</span>
          <span>☾ Presentes sob encomenda</span>
          <span>♁ Curitiba e envio a combinar</span>
        </section>

        <section className="trust-bar" aria-label="Informações de confiança">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="intro section-pad branch-divider" aria-labelledby="intro-title">
          <div className="section-heading">
            <p className="eyebrow">Natureza, cuidado e pequenos rituais</p>
            <h2 id="intro-title">O mundo artesanal mora nos detalhes.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Cada peça da Herbarium nasce em pequenas produções, com atenção ao
              toque, ao aroma, às cores e ao tempo de cada processo. O artesanal
              carrega esse encanto: nenhum item é completamente igual ao outro.
            </p>
            <p>
              Sabonetes, velas aromáticas e escalda-pés são criados para
              presentear, acolher e tornar os cuidados diários mais bonitos,
              sensoriais e presentes.
            </p>
          </div>
        </section>

        <section id="produtos" className="products section-pad" aria-labelledby="products-title">
          <div className="section-heading centered">
            <p className="eyebrow">Feitos em pequenos lotes</p>
            <h2 id="products-title">Escolha seu ritual.</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card botanical-card" key={product.title}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.alt} />
                  <span>{product.tag}</span>
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <a className="text-link" href={product.href} target="_blank" rel="noreferrer">
                    {product.cta}
                  </a>
                </div>
              </article>
            ))}
            <article className="product-card product-card-text botanical-card">
              <div className="moon-mark" aria-hidden="true">
                ☾ ✦ ☽
              </div>
              <span className="card-kicker">Pausa para os pés</span>
              <h3>Escalda-pés artesanal</h3>
              <p>
                Para pausa, relaxamento e autocuidado: uma forma simples de
                desacelerar e transformar o fim do dia em ritual.
              </p>
              <a className="text-link light" href={whatsappFootSoak} target="_blank" rel="noreferrer">
                Quero escalda-pés
              </a>
              <small>Foto em breve</small>
            </article>
          </div>
        </section>

        <section id="presentes" className="occasions section-pad branch-divider" aria-labelledby="occasions-title">
          <div className="section-heading centered">
            <p className="eyebrow">Quando escolher Herbarium</p>
            <h2 id="occasions-title">Para cuidar, presentear e marcar momentos.</h2>
          </div>
          <div className="occasion-list" aria-label="Ocasiões de compra">
            {occasions.map((occasion) => (
              <span key={occasion}>{occasion}</span>
            ))}
          </div>
        </section>

        <section className="gallery section-pad botanical-gallery" aria-label="Galeria de produtos Herbarium">
          <img src="/images/kit-sabonetes-presentes.webp" alt="Kit de sabonetes artesanais em caixa para presente" />
          <img src="/images/vela-baunilha-morango.webp" alt="Vela aromática de baunilha e morango com laço rosa" />
          <img src="/images/sabonetes-artesanais.webp" alt="Sabonetes artesanais amarelos em embalagem rústica" />
          <img src="/images/vela-cimento-rosa.webp" alt="Vela artesanal rosa com base de cimento" />
        </section>

        <section className="gifts section-pad" aria-labelledby="gifts-title">
          <div>
            <p className="eyebrow">Para você ou para presentear</p>
            <h2 id="gifts-title">Kits com cara de carinho.</h2>
          </div>
          <p>
            A Herbarium monta combinações sob encomenda para datas especiais,
            lembrancinhas, presentes afetivos e pequenos rituais de cuidado. Os
            detalhes de aromas, cores, disponibilidade e envio são combinados
            diretamente pelo WhatsApp.
          </p>
          <a className="button secondary" href={whatsappOrder} target="_blank" rel="noreferrer">
            Pedir opções de kit
          </a>
        </section>

        <section id="historia" className="story section-pad branch-divider" aria-labelledby="story-title">
          <div className="story-photo">
            <img
              src="/images/fernanda-krokoscz.webp"
              alt="Fernanda Krokoscz, responsável pela marca Herbarium"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">Por trás da marca</p>
            <h2 id="story-title">Criada por Fernanda Krokoscz.</h2>
            <p>
              A Herbarium nasceu do encanto pelos aromas naturais, pelas pequenas
              pausas e pela beleza das coisas feitas à mão.
            </p>
            <p>
              Criamos produtos artesanais para transformar pequenos momentos de
              autocuidado em rituais calmos, acolhedores e especiais.
            </p>
          </div>
        </section>

        <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
          <div className="contact-inner botanical-frame">
            <p className="eyebrow">Encomendas em Curitiba e envio a combinar</p>
            <h2 id="contact-title">Vamos montar seu ritual?</h2>
            <p>
              Fale com a Fernanda pelo WhatsApp para consultar aromas, produtos
              disponíveis, prazos, kits e formas de entrega.
            </p>
            <div className="hero-actions contact-actions">
              <a className="button primary" href={whatsappProducts} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
              <a className="button ghost dark" href={instagram} target="_blank" rel="noreferrer">
                Acompanhar no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={whatsappOrder}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a Herbarium no WhatsApp"
      >
        WhatsApp
      </a>

      <footer>
        <p>Herbarium | Saboaria botânica e produtos artesanais</p>
        <p>Sabonetes, velas aromáticas e escalda-pés feitos à mão.</p>
      </footer>
    </>
  );
}
