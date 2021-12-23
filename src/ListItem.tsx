import React from 'react';

interface ItemProps {
  data: any
}

const ListItem = ({ data }: ItemProps ) => {
  console.log('rerender')
  return (
    <span>
      {data}
      <br />
    </span>
  );
};

export default React.memo(ListItem);