import React, { FC } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Cell } from '../Cell';
import { BoardClass } from '../models/BoardClass';

interface BoarProps {
	board: BoardClass;
	setBoard: (board: BoardClass) => void;
}

const Board: FC<BoarProps> = ({ board, setBoard }) => {
	return (
		<div className={cn('board')}>
			{board.cells.map((row, index) => {
				return (
					<React.Fragment key={index}>
						{row.map((cell) => (
							<Cell cell={cell} />
						))}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export { Board };
