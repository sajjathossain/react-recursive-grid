import { FC } from 'react';

const styles = (disabled?: boolean) => {
  if (!disabled) {
    return {
      style: {
        backgroundColor: 'darkseagreen',
        color: 'whitesmoke',
        opacity: 59,
      },
    };
  }

  return {};
};

type TCustomButtonProps = {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
};

export const CustomButton: FC<TCustomButtonProps> = (props) => {
  const { onClick, label, disabled } = props;
  return (
    <button
      disabled={disabled}
      {...styles(disabled)}
      {...(onClick && {
        onClick,
      })}
    >
      {label}
    </button>
  );
};
