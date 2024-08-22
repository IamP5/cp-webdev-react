import './Sobre.css'
import PlanCard from '../../components/PlanCard/PlanCard'
import PhoneLeft from '../../assets/images/phone-left.svg'
import PhoneRight from '../../assets/images/phone-right.svg'
import Hero from '../../components/Hero/Hero'

function Sobre() {
  return (
    <main className="sobre">
      <Hero
        title="Bem-vindo à revolução dos vídeos!"
        description="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
        cta="Baixe o app"
        images={[PhoneLeft, PhoneRight]}
      />
      <section className="plans">
        <h2>Planos</h2>
        <div className="plan-cards">
          <PlanCard 
            title="Individual" 
            features={[
              {
                title: '1 usuário',
                description: '10 vídeos',
                value: 'R$15'
              }
            ]}
            buttonText="Cadastrar"
            color="#000"
          />
          <PlanCard 
            title="Profissional - Times" 
            features={[
              {
                title: '1-10 usuários',
                description: 'vídeos ilimitados',
                value: 'R$40'
              },
              {
                title: '+10 usuários',
                description: 'vídeos ilimitados',
                value: 'R$20'
              }
            ]}
            buttonText="Cadastrar"
          />
          <PlanCard 
            title="Corporativo"
            buttonText="Entre Em Contato"
          />
        </div>
      </section>
    </main>
  )
}

export default Sobre