// components/Button.tsx
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles, size = 'medium', shape, className = '' }) => {
  return (
    <button className={`${styles} ${className} /* your existing classes */`}>
      {title}
    </button>
  );
};