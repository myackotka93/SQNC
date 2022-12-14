import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Noise.module.scss';


function Noise() {
  const [mounted, setmMunted] = useState(false);

  useEffect(() =>{
    setmMunted(true);
 }, [])

  return (
    <div className={classNames(styles.Noise, {[styles.mounted]: mounted} )}>

    </div>
  )
}

Noise.propType = {
}

export default React.memo(Noise);
