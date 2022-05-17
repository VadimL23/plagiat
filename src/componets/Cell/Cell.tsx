import React, { FC } from 'react';
import s from './style.scss';
import cn from 'classnames';
import { CellClass } from '../models/CellClass';

interface CellProps {
	cell: CellClass;
}

const Cell: FC<CellProps> = ({ cell }) => {
	return <div className={cn('cell', cell.color)}></div>;
};

export { Cell };
