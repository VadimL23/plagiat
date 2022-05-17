import React, { FC, useState } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Cell } from '../Cell';
import { BoardClass } from '../models/BoardClass';
import { CellClass } from '../models/CellClass';

interface BoarProps {
	board: BoardClass;
	setBoard: (board: BoardClass) => void;
}

const Board: FC<BoarProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

	function click(cell: CellClass) {
		if (cell.figure) setSelectedCell(cell);
	}

	return (
		<div className={cn('board')}>
			{board.cells.map((row, index) => {
				return (
					<React.Fragment key={index}>
						{row.map((cell) => (
							<Cell
								cell={cell}
								key={cell.id}
								selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
								click={click}
							/>
						))}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export { Board };
