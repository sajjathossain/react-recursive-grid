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
        display: 'flex',
        flexDirection: item.isVertical ? 'column' : 'row',
        width: 'fit-content',
        height: 'fit-content',
        border: `1px solid ${item.borderColor}`,
        borderRadius: '10px',
        placeItems: 'center',
        gap: '15px',
        padding: '10px',
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
          {idx === 0 && (
            <div
              style={{
                borderRadius: '10px',
              }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
