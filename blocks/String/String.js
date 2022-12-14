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
        <div className={styles.text}> Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥</div>
        <div className={styles.text}> Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥</div>
      </div>
    </div>
  )
}

String.propType = {
}

export default React.memo(String);
