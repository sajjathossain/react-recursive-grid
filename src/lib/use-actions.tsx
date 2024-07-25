import { useRef, useState } from 'react';
import { generateRandomColor } from './color';
import { TAddChildren, TItem, TRemoveChildren, TResetStates } from './types';

export const useActions = () => {
  const initialState: TItem = {
    isVertical: false,
    children: false,
    borderColor: generateRandomColor(),
  };

  const items = useRef(initialState);
  const [_, setCount] = useState(0);

  const resetStates: TResetStates = ({ parentItem, child, shouldDelete }) => {
    if (shouldDelete) {
      delete parentItem.borderColor;
      parentItem.isVertical = false;
      parentItem.children = false;
      return;
    }

    parentItem.children = child.children;
    parentItem.isVertical = child.isVertical;
    parentItem.borderColor = child.borderColor;
  };

  const removeChildren: TRemoveChildren = (parentItem) => {
    if (!parentItem) return;
    if (!parentItem.children) {
      return resetStates({ parentItem, shouldDelete: true });
    }

    const childWithMultipleElements = parentItem.children.find(
      (item) => item.children
    );

    if (!childWithMultipleElements) {
      resetStates({ parentItem, shouldDelete: true });
    }

    if (childWithMultipleElements) {
      resetStates({ parentItem, child: childWithMultipleElements });
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
