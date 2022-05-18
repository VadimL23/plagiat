import React, { FC } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Colors } from '../models/colors';
import FigureClass from '../models/figures/FigureClass';

interface LostFiguresProps {
	title: string;
	figures: FigureClass[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<div className="lost">
			<h3>{title}</h3>
			{figures.map((f) => {
				return (
					<div key={f.id}>
						{f.name} {f.logo && <img src={f.logo} height={20} alt="" />}
					</div>
				);
			})}
		</div>
	);
};

export { LostFigures };
