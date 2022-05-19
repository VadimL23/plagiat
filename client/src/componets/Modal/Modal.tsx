import React, { FC, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import './style.css';

interface ModalProps {
	isOpen: boolean;
	title: string;
	onModalClose: () => void;
	textBtn?: string;
	callbackBtn: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, title, onModalClose, textBtn, callbackBtn }) => {
	const [status, setStatus] = useState(isOpen);

	const handleClick = () => {
		callbackBtn();
		setStatus(false);
	};

	return (
		<div className={cn(s.modal_wrapper, { open: status, close: !status })}>
			<div className={cn(s.modal_body)}>
				<div
					className={cn(s.modal_close)}
					onClick={() => {
						setStatus(false);
						onModalClose();
					}}
				>
					&times;
				</div>
				<h1 className={cn(s.title)}>{title}</h1>
				<button className={cn(s.modal_btn)} onClick={handleClick}>
					{textBtn || 'Restart'}
				</button>
			</div>
		</div>
	);
};

export { Modal };
