import ImgFoto from "./assets/ImgFoto.jpg";

function Header() {
  return (
    <main id="inicio" className="cabecalho">
      <img src={ImgFoto} alt="Foto de perfil" className="foto-perfil" />
      <h1>João Paulo</h1>
      <p>desenvolvedor e analista de dados</p>
      <p className="sub-titulo">
        Transformando dados em insights e ideias em código.
      </p>
    </main>
  );
}

export default Header;
