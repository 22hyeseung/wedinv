import cx from 'classnames';
import styles from './CoverText.module.css';
import Paragraph from '../../atoms/typo/Paragraph/Paragraph';

export default function CoverText() {
  return (
    <>
      <Paragraph className={cx(styles.paragraph, styles.title)} direction="vertical">
        <span>장진영</span>
        <span>김동환</span>
        <span>결혼합니다!</span>
      </Paragraph>
      <Paragraph className={cx(styles.paragraph, styles.location)} direction="vertical">
        <span>2022년 3월 5일 토요일</span>
        <span>오후 1시 40분</span>
        <span>더뉴컨벤션웨딩홀</span>
      </Paragraph>
    </>
  );
}
