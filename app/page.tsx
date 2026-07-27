const whatsappOrder =
  "https://wa.me/5541998212149?text=Oi%2C%20Fernanda%21%20Vim%20pela%20landing%20page%20da%20Herbarium%20e%20quero%20fazer%20uma%20encomenda.";

const whatsappKits =
  "https://wa.me/5541998212149?text=Oi%2C%20Fernanda%21%20Gostaria%20de%20saber%20sobre%20kits%20e%20presentes%20da%20Herbarium.";

const whatsappProducts =
  "https://wa.me/5541998212149?text=Oi%2C%20Fernanda%21%20Quero%20conhecer%20os%20produtos%20artesanais%20da%20Herbarium.";

const instagram = "https://www.instagram.com/herbarium.artesanal/";

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="Topo">
        <a className="brand-mark" href="#inicio" aria-label="Herbarium - início">
          <img src="/images/logo-da-marca.jpeg" alt="" />
          <span>
            <strong>Herbarium</strong>
            <small>Produtos Artesanais</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#historia">História</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/kit-sabonetes-vela.jpeg"
            alt="Kit artesanal Herbarium com vela aromática e sabonetes em formato de coração"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Curitiba | Feito à mão por Fernanda Krokoscz</p>
            <h1 id="hero-title">Herbarium</h1>
            <p className="hero-subtitle">
              Produtos artesanais para transformar o autocuidado em um ritual
              calmo, perfumado e especial.
            </p>
            <div className="hero-actions" aria-label="Ações principais">
              <a className="button primary" href={whatsappOrder} target="_blank" rel="noreferrer">
                Encomendar pelo WhatsApp
              </a>
              <a className="button ghost" href={instagram} target="_blank" rel="noreferrer">
                Ver Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="intro section-pad" aria-labelledby="intro-title">
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
          <div className="section-heading">
            <p className="eyebrow">Feitos em pequenos lotes</p>
            <h2 id="products-title">Escolha seu ritual.</h2>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <img
                src="/images/sabonetes-coracao.jpeg"
                alt="Sabonetes artesanais coloridos em formato de coração"
              />
              <div>
                <h3>Sabonetes artesanais</h3>
                <p>
                  Formatos delicados, cores vivas e aromas pensados para
                  transformar o banho em um momento de pausa.
                </p>
              </div>
            </article>
            <article className="product-card">
              <img
                src="/images/vela-capim-limao.jpeg"
                alt="Vela aromática Herbarium de capim limão em copo de vidro"
              />
              <div>
                <h3>Velas aromáticas</h3>
                <p>
                  Velas decorativas e perfumadas para criar clima, aquecer
                  ambientes e compor presentes especiais.
                </p>
              </div>
            </article>
            <article className="product-card product-card-text">
              <div className="botanical-symbol" aria-hidden="true">
                ✦
              </div>
              <div>
                <h3>Escalda-pés artesanal</h3>
                <p>
                  Uma pausa para desacelerar: preparado artesanalmente para
                  acompanhar momentos de descanso e autocuidado.
                </p>
                <span>Foto em breve</span>
              </div>
            </article>
          </div>
        </section>

        <section className="gallery section-pad" aria-label="Galeria de produtos Herbarium">
          <img src="/images/kit-sabonetes-presentes.jpeg" alt="Kit de sabonetes artesanais em caixa para presente" />
          <img src="/images/vela-baunilha-morango.jpeg" alt="Vela aromática de baunilha e morango com laço rosa" />
          <img src="/images/sabonetes-artesanais.jpeg" alt="Sabonetes artesanais amarelos em embalagem rústica" />
          <img src="/images/vela-cimento-rosa.jpeg" alt="Vela artesanal rosa com base de cimento" />
        </section>

        <section className="gifts section-pad" aria-labelledby="gifts-title">
          <div>
            <p className="eyebrow">Para você ou para presentear</p>
            <h2 id="gifts-title">Kits com cara de carinho.</h2>
          </div>
          <p>
            A Herbarium também monta combinações sob encomenda para datas
            especiais, lembrancinhas, presentes afetivos e pequenos rituais de
            cuidado. Os detalhes de aromas, cores, disponibilidade e envio são
            combinados diretamente pelo WhatsApp.
          </p>
          <a className="button secondary" href={whatsappKits} target="_blank" rel="noreferrer">
            Pedir opções de kit
          </a>
        </section>

        <section id="historia" className="story section-pad" aria-labelledby="story-title">
          <div className="story-photo">
            <img
              src="/images/fernanda-krokoscz.jpeg"
              alt="Fernanda Krokoscz, responsável pela marca Herbarium"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">Por trás da marca</p>
            <h2 id="story-title">Criada por Fernanda Krokoscz.</h2>
            <p>
              A Herbarium nasceu do encanto pelos aromas naturais, pelas
              pequenas pausas e pela beleza das coisas feitas à mão.
            </p>
            <p>
              Criamos produtos artesanais para transformar pequenos momentos de
              autocuidado em rituais calmos, acolhedores e especiais.
            </p>
          </div>
        </section>

        <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
          <div className="contact-inner">
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
        <p>Herbarium | Produtos Artesanais</p>
        <p>Sabonetes, velas aromáticas e escalda-pés feitos à mão.</p>
      </footer>
    </>
  );
}
