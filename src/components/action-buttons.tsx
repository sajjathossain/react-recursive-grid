import { TActionButtonProps } from '../lib';

export const ActionButtons = (props: TActionButtonProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        border: `1px solid #aeeffe`,
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <button
          {...(props?.addChildren && {
            onClick: () => props.addChildren(props.item, 'horizontal'),
          })}
        >
          V
        </button>
        <button
          {...(props?.addChildren && {
            onClick: () => props.addChildren(props.item, 'vertical'),
          })}
        >
          H
        </button>
      </div>
      <button
        {...(props?.removeChildren &&
          props?.parentItem && {
            onClick: () => props.removeChildren(props.items, props?.parentItem),
          })}
        {...(props.parentItem?.children && {
          style: {
            backgroundColor: 'darkseagreen',
            color: 'whitesmoke',
            opacity: 59,
          },
        })}
        disabled={!props.parentItem?.children}
      >
        -
      </button>
    </div>
  );
};
