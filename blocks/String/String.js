import classnames from 'classnames';
import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './String.module.scss';

function String({ }) {
  const [mounted, setmMunted] = useState(false);

  useEffect(() =>{
    setmMunted(true);
 }, [])


  return (
    <div className={styles.infinite}>
      <div className={classNames(styles.String, {[styles.mounted]: mounted} )}>
        <div className={styles.text}> Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟 Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟 Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟</div>
        <div className={styles.text}> Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟 Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟 Mobile app 路 AR and VR projects 路 Chatbots 路 馃拵 Visual 路 UX/UI 路 Digital services and websites 路 Intranet systems 路 馃敟</div>
      </div>
    </div>
  )
}

String.propType = {
}

export default React.memo(String);
