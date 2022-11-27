import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';
import HtmlParser from 'html-react-parser';
import typograf from '@/utils/typograf';

function Button({ text="скачать презентацию.pdf" }) {
  return (
    <>
      <button className={styles.button}>
        {text}
      </button>
    </>
  )
}

Button.propType = {
}

export default React.memo(Button);
