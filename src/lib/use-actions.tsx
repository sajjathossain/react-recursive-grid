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

  const removeChildren: TRemoveChildren = (parentItem) => {
    if (!parentItem) return;
    if (!parentItem.children) {
      delete parentItem.borderColor;
      parentItem.isVertical = false;
      parentItem.children = false;
      return;
    }

    const childWithMultipleElements = parentItem.children.find(
      (item) => item.children
    );

    if (!childWithMultipleElements) {
      delete parentItem.borderColor;
      parentItem.isVertical = false;
      parentItem.children = false;
    }

    if (childWithMultipleElements) {
      parentItem.children = childWithMultipleElements.children;
      parentItem.isVertical = childWithMultipleElements.isVertical;
      parentItem.borderColor = childWithMultipleElements.borderColor;
    }
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const addChildren: TAddChildren = (item, direction) => {
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
