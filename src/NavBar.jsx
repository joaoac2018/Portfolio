import LogoIcon from "./assets/LogoIcon.svg";

function NavBar() {
  return (
    <nav className="navegacao">
      <div className="logo">
        <img src={LogoIcon} alt="Icone do portfólio" className="logo-icone" />
        <span className="logo-text">Dev{"{Aos40}"}</span>
      </div>
      <ul className="menu">
        <li><a href="#inicio" className="menu-link">Início</a></li>
        <li><a href="#sobre" className="menu-link">Sobre</a></li>
        <li><a href="#projetos" className="menu-link">Projetos</a></li>
        <li><a href="#contatos" className="menu-link">Contatos</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
