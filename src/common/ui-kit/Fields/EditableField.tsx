import React from 'react';

type Props = {
  type: string;
};

export const EditableField = ({ type }: Props) => {
  return <input type={type} />;
};
