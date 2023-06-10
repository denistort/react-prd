import { FC, PropsWithChildren } from 'react';
import c from './Button.module.scss';

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
	<button className={c.button}>{ children }</button>
  )
}
