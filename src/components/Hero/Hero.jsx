import Button from '../Button/Button';
import "./Hero.css";

function Hero({ title, description, cta, images }) {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        <Button size="large">{cta}</Button>
      </div>
      <div className="hero__images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`hero-${index}`} className="hero__image" />
        ))}
      </div>
    </section>
  );
}

export default Hero;