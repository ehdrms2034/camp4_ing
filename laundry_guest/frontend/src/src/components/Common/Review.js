import React from 'react';
import classNames from 'classnames';
import styles from './Review.scss';
import GradeIcon from '../Common/GradeIcon'

const cx = classNames.bind(styles);

const Review = ({ author, grade, content, createdAt }) => {

  return (
    <div className={cx('review-container')}>
      <div className={cx('review-wapper')}>
        <div className={cx('author')}>{author}</div>
        <div className={cx('sub-data')}>
          <div className={cx('grade')}>
            <GradeIcon grade={grade} fontSize={16} />
          </div>
          <div className={cx('created-at')}>{createdAt}</div>
        </div>
        <div className={cx('content')}>{content}</div>
      </div>
    </div>
  )
}

export default Review;