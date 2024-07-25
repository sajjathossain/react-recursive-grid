import { Fragment } from 'react/jsx-runtime';
import './main.css';
import { ActionButtons, GridItem } from './components';
import { useRef, useState } from 'react';
import { TAddChildren, TItem, TRemoveChildren } from './lib';
import { generateRandomColor } from './lib/color';

export function Main() {
  const initialState: TItem = {
    isVertical: false,
    children: false,
    borderColor: generateRandomColor(),
  };

  const items = useRef(initialState);
  const [_, setCount] = useState(0);

  const removeChildren: TRemoveChildren = (children, parentItem) => {
    if (!parentItem) return;
    if (!parentItem.children) return (parentItem.children = false);
    console.log({ children, parentItem });
    parentItem.children = false;
    // parentItem.children = false;
    setCount((prev) => prev + 1);
  };

  const addChildren: TAddChildren = (item, direction) => {
    console.log({ item });
    item.isVertical = direction === 'vertical';
    item.children = [
      {
        children: false,
        isVertical: false,
      },
      {
        children: false,
        isVertical: false,
      },
    ];
    item.borderColor = generateRandomColor();
    setCount((prev) => prev + 1);
  };

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
    </Fragment>
  );
}
