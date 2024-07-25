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

export type TRemoveChildren = (parentItem?: TItem) => void;

export type TActionButtonProps =
  | {
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

export type TResetStates = ({
  parentItem,
  child,
  shouldDelete,
}:
  | {
    parentItem: TItem;
  } & (
    | {
      child: TItem;
      shouldDelete?: false;
    }
    | {
      child?: null;
      shouldDelete: true;
    }
  )) => void;
