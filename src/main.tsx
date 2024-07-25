import { Fragment } from 'react/jsx-runtime';
import './main.css';
import { ActionButtons, GridItem } from './components';
import { useActions } from './lib';

export function Main() {
  const { addChildren, items, removeChildren, reset } = useActions();

  return (
    <Fragment>
      {items.current.children ? (
        <GridItem
          addChildren={addChildren}
          parentItem={items.current}
          children={items.current.children}
          removeChildren={removeChildren}
          item={items.current}
        />
      ) : (
        <ActionButtons
          removeChildren={removeChildren}
          addChildren={addChildren}
          item={items.current}
          parentItem={items.current}
        />
      )}
      <button
        style={{
          marginTop: '10px',
          ...(items.current.children && {
            color: 'white',
            backgroundColor: 'darkred',
          }),
        }}
        disabled={!items.current.children}
        onClick={() => reset()}
      >
        Reset
      </button>
    </Fragment>
  );
}
