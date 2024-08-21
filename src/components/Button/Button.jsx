import './Button.css'

function Button({ children, onClick, variant = 'default', size = 'medium' }) {
  const classNames = `button button--${variant} button--${size}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button