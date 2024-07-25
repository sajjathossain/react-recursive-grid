import { Fragment } from 'react/jsx-runtime';
import { TAddChildren, TChildren, TItem, TRemoveChildren } from '../lib';
import { ActionButtons } from './action-buttons';

export const GridItem = ({
  children,
  item,
  parentItem,
  addChildren,
  removeChildren,
  items,
}: {
  item: TItem;
  items?: [TItem, TItem];
  parentItem: TItem;
  children: TChildren;
  addChildren: TAddChildren;
  removeChildren: TRemoveChildren;
}) => {
  if (!children)
    return (
      <ActionButtons
        items={items}
        removeChildren={removeChildren}
        addChildren={addChildren}
        item={item}
        parentItem={parentItem}
      />
    );

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
        <Fragment>
          <GridItem
            item={child}
            items={children}
            parentItem={item}
            addChildren={addChildren}
            removeChildren={removeChildren}
            children={child.children}
            key={Date.now() + idx}
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
