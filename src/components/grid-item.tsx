import { Fragment } from 'react/jsx-runtime';
import { TAddChildren, TChildren, TItem, TRemoveChildren } from '../lib';
import { ActionButtons } from './action-buttons';
import { FC } from 'react';

type TGridItem = {
  item: TItem;
  items?: [TItem, TItem];
  parentItem: TItem;
  children: TChildren;
  addChildren: TAddChildren;
  removeChildren: TRemoveChildren;
};

export const GridItem: FC<TGridItem> = (props) => {
  const { children, item, parentItem, addChildren, removeChildren } = props;

  if (!children) {
    return (
      <ActionButtons
        removeChildren={removeChildren}
        addChildren={addChildren}
        item={item}
        parentItem={parentItem}
      />
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        ...(item.isVertical
          ? {
            gridTemplateColumns: '1fr 1fr',
          }
          : {
            gridTemplateRows: '1fr 1fr',
          }),
        color: 'white',
        backgroundColor: item.borderColor,
        border: `1px solid ${item.borderColor}`,
        borderRadius: '5px',
        gap: '5px',
        height: 'auto',
        padding: '10px',
        width: 'auto',
      }}
    >
      {children.map((child, idx) => (
        <Fragment key={`${Date.now()}-${idx}`}>
          <GridItem
            item={child}
            parentItem={item}
            addChildren={addChildren}
            removeChildren={removeChildren}
            children={child.children}
          />
        </Fragment>
      ))}
    </div>
  );
};
