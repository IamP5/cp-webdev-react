import './PlanCard.css'
import Button from '../Button/Button'
import NoFeatureImg from '../../assets/images/no-feature.svg'

function PlanCard({ color, title, features, buttonText }) {

  const Feature = ({ title, description, value }) => {
    return (
      <li className="plan-card__feature">
        <h4>{title}</h4>
        <div className="plan-card__feature-description">
          {description} <span className="plan-card__feature-value">{value}</span>
        </div>
      </li>
    )
  }

  const Features = () => {
    if (features && features.length > 0) {
      return (
        <ul className="plan-card__features">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </ul>
      );
    } else {
      return <img src={NoFeatureImg} alt="No features" className="plan-card__no-features" />
    }
  }

  return (
    <div className="plan-card">
      <header className="plan-card__header" style={{ backgroundColor: color || 'transparent' }}>
        <h3 style={{ color: color ? 'white' : 'inherit' }}>{title}</h3>
      </header>
      <main className="plan-card__main">
        <Features />
      </main>
      <footer className="plan-card__footer">
        <Button 
          variant={color ? 'default' : 'outline'}
          fullWidth={true}
          style={{ backgroundColor: color, color: color ? 'white' : 'inherit' }}
        >
          {buttonText}
        </Button>
      </footer>
    </div>
  )
}

export default PlanCard