import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './NoProducts.scss';

type Props = {
  children: ReactNode;
};

export const NoProducts: React.FC<Props> = ({ children }) => {
  return (
    <div className="no-results">
      <div className="no-results__text">{children}</div>

      <Link to="/" className="no-results__back-home-btn">
        Return to home page
      </Link>
    </div>
  );
};
