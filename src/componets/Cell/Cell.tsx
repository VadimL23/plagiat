import React, { FC } from 'react';
import s from './style.scss';
import cn from 'classnames';
import { CellClass } from '../models/CellClass';

interface CellProps {
	cell: CellClass;
	selected: boolean;
	click: (cell: CellClass) => void;
}

const Cell: FC<CellProps> = ({ cell, selected, click }) => {
	return (
		<div
			className={cn('cell', cell.color, { selected })}
			onClick={() => click(cell)}
			style={{ backgroundColor: cell.avaliable && cell.figure ? 'green' : '' }}
		>
			{cell.avaliable && !cell.figure && <div className="avaliable"></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
		</div>
	);
};

export { Cell };
