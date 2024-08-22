import './Button.css'

function Button({ children, onClick, variant = 'default', size = 'medium', fullWidth = false }) {
  const classNames = `button button--${variant} button--${size}`;

  return (
    <button className={classNames} onClick={onClick} style={{ width: fullWidth ? '100%' : 'auto' }}>
      {children}
    </button>
  )
}

export default Button