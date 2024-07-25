import { useRef, useState } from 'react';
import { generateRandomColor } from './color';
import { TAddChildren, TItem, TRemoveChildren } from './types';

export const useActions = () => {
  const initialState: TItem = {
    isVertical: false,
    children: false,
    borderColor: generateRandomColor(),
  };

  const items = useRef(initialState);
  const [_, setCount] = useState(0);

  const removeChildren: TRemoveChildren = (_children, parentItem) => {
    if (!parentItem) return;
    if (!parentItem.children) return (parentItem.children = false);
    // console.log({ children, parentItem });
    parentItem.children = false;
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
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

  const reset = () => {
    items.current = initialState;
    setCount(() => 0);
  };

  return {
    addChildren,
    items,
    removeChildren,
    reset,
    setCount,
  };
};
