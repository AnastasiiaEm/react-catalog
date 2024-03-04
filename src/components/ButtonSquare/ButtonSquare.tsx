import classNames from 'classnames';
import './ButtonSquare.scss';

type Props = {
  icon: string;
  onAction: () => void;
  isDisabled?: boolean;
};

export const ButtonSquare: React.FC<Props> = ({
  icon,
  onAction,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      className={classNames('button-square', {
        'button-square--disabled': isDisabled,
      })}
      onClick={onAction}
    >
      <span className={`button-square__icon button-square__icon--${icon}`} />
    </button>
  );
};
