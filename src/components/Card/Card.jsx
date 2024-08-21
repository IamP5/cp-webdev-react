import './Card.css'

function Card({ id, title, description, color, icon }) {
  const colorMap = {
    red: '#F1C2B0',
    yellow: '#F9EB98',
    green: '#C0D9DD',
    blue: '#6975E8'
  }

  return (
    <div className="card" style={{ backgroundColor: colorMap[color], width: '100%', height: '100%' }}>
      <div className="card__content">
        <h2 className="card__number">{id}</h2>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__icon">
        <img src={icon} alt={title} />
      </div>
    </div>
  )
}

export default Card