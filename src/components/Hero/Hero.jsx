import Button from "../Button/Button";
import hero from "../../assets/images/hero.svg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Crie seus vídeos online</h1>
        <p className="hero__description">
          Transforme suas ideias em filmes memoráveis: onde a criatividade
          encontra a simplicidade.
        </p>
        <Button className="hero__cta" size="large">Começar agora!</Button>
      </div>
      <div className="hero__image">
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;