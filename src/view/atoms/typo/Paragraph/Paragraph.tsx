import cx from 'classnames';
import { ComponentProps } from 'react';
import styles from './Paragraph.module.css';

interface ParagraphProps extends ComponentProps<'p'> {
  direction?: 'horizontal' | 'vertical';
}

export default function Paragraph(props: ParagraphProps) {
  const { direction, children, className } = props;
  return (
    <p className={cx(styles.container, styles[direction ?? 'horizontal'], className)}>{children}</p>
  );
}
