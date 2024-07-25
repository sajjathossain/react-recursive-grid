export type TItem = {
  isVertical: boolean;
  parent?: TItem;
  borderColor?: `#${string}`;
  children: false | [TItem, TItem];
};

export type TChildren = false | [TItem, TItem];

export type TAddChildren = (
  item: TItem,
  direction: 'vertical' | 'horizontal'
) => void;

export type TRemoveChildren = (childen?: TChildren, parentItem?: TItem) => void;

export type TActionButtonProps =
  | {
    items?: [TItem, TItem];
    item: TItem;
    parentItem: TItem;
    addChildren: TAddChildren;
    removeChildren: TRemoveChildren;
  }
  | {
    children?: null;
    item?: null;
    items?: null;
    addChildren?: null;
    removeChildren?: null;
    parentItem?: null;
  };
