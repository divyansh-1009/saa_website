import './GlassIcons.css';

const gradientMapping = {
  light: {
    blue: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    green: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    indigo: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    purple: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    red: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    gray: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    cyan: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    sky: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    pink: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
    amber: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))'
  },
  dark: {
    blue: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    green: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    indigo: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    purple: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    red: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    gray: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    cyan: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    sky: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    pink: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))',
    amber: 'linear-gradient(135deg, hsl(220, 15%, 25%), hsl(220, 15%, 20%))'
  }
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = color => {
    const isDark = document.documentElement.classList.contains('dark');
    const theme = isDark ? 'dark' : 'light';
    
    if (gradientMapping[theme][color]) {
      return { background: gradientMapping[theme][color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon-btn ${item.customClass || ''}`}
          aria-label={item.label}
        >
          <span className="icon-btn__back dark:shadow-none" style={getBackgroundStyle(item.color)}></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default GlassIcons;