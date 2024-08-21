import Feature from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import tiktok from "../../assets/icons/tiktok.png";
import youtube from "../../assets/icons/youtube.png";
import "./Home.css";

function Home() {
  const features = [
    {
      id: "01",
      title: "Youtube",
      description:
        "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      color: "red",
      icon: youtube,
    },
    {
      id: "02",
      title: "Tiktok",
      description:
        "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      color: "yellow",
      icon: tiktok,
    },
    {
      id: "03",
      title: "Facebook",
      description:
        "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      color: "green",
      icon: facebook,
    },
    {
      id: "04",
      title: "Instagram",
      description:
        "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      color: "blue",
      icon: instagram,
    },
  ];

  return (
    <main className="home">
      <Hero />
      <section className="feature-cards">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </section>
    </main>
  );
}

export default Home;
