import { CgBlock, CgMergeHorizontal, CgMergeVertical } from 'react-icons/cg';
import { TActionButtonProps } from '../lib';
import { CustomButton } from './custom-button';
import { FaGripLinesVertical } from 'react-icons/fa';
import { FaGripLines } from 'react-icons/fa';
import { useMemo } from 'react';

export const ActionButtons = (props: TActionButtonProps) => {
  const { addChildren, removeChildren, parentItem, item } = props;

  const icon = useMemo(() => {
    if (!parentItem || !parentItem.children) return <CgBlock />;
    return parentItem.isVertical ? <CgMergeVertical /> : <CgMergeHorizontal />;
  }, [parentItem]);

  return (
    <div
      style={{
        alignItems: 'center',
        border: `1px solid #bef1ff35`,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        padding: '10px',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <CustomButton
          icon={<FaGripLinesVertical />}
          onClick={() => addChildren && addChildren(item, 'vertical')}
        />
        <CustomButton
          icon={<FaGripLines />}
          onClick={() => addChildren && addChildren(item, 'horizontal')}
        />
      </div>
      <CustomButton
        onClick={() => {
          if (removeChildren && parentItem) removeChildren(parentItem);
        }}
        label="delete"
        disabled={!parentItem?.children}
        icon={icon}
      />
    </div>
  );
};
