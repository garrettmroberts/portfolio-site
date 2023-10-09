'use client';
import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { TbHexagonLetterG } from 'react-icons/tb';

type Props = {
  size?: string;
};

const Logo: FC<Props> = ({ size = '1em' }) => {
  return (
    <IconContext.Provider value={{ color: 'var(--primaryColor)' }}>
      <TbHexagonLetterG size={size} />
    </IconContext.Provider>
  );
};

export default Logo;
