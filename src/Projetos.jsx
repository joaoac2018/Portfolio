import sistemaEscolar from "./assets/SistemaEscolar.jpg";
import fotomedidor from "./assets/fotomedidor.jpg";
import cadastroClientes from "./assets/CadastroClientes.jpg";

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto 1",
      descricao: "Sistema escolar para cadastro.",
      imagem: sistemaEscolar,
      alt: "Sistema Escolar"
    },
    {
      id: 2,
      titulo: "Projeto 2",
      descricao: "Descrição do projeto 2.",
      imagem: fotomedidor,
      alt: "Fotômetro"
    },
    {
      id: 3,
      titulo: "Projeto 3",
      descricao: "Descrição do projeto 3.",
      imagem: cadastroClientes,
      alt: "Cadastro de Clientes"
    }
  ];

  return (
    <section id="projetos" className="projetos">
      <h2 className="projetos-titulo">Meus Projetos</h2>
      <div className="projetos-cards">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projetos-card">
            <img
              src={projeto.imagem}
              alt={projeto.alt}
              className="projetos-imagem"
            />
            <div className="texto-projetos">
              <h3 className="info-projetos">{projeto.titulo}</h3>
              <p className="paragrafos-projetos">{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
