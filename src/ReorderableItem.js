import React, { useEffect, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ListGroupItem } from 'react-bootstrap';
import { Input } from 'reactstrap';

function ReorderableItem({
  children,
  controls,
  menu,
  onExpand,
  onSelect,
  open = false,
  selected,
  id,
  ...props
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ListGroupItem ref={setNodeRef} style={style} {...props}>
      <div className="d-flex align-items-center">
        <div
          className="d-inline-block me-2 opacity-25"
          color="link"
          {...attributes}
          {...listeners}
        >
          <i className="fas fa-grip-vertical" style={{ cursor: 'ns-resize' }} />
        </div>

        <span className="p-0 me-2">
          <Input
            className="mx-0"
            type="checkbox"
            onChange={(e) => onSelect(e.target.checked)}
            checked={selected}
          />
          <input />
        </span>
        <input placeholder="11" />
        {children}
      </div>
    </ListGroupItem>
  );
}

export default ReorderableItem;
