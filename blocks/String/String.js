import classnames from 'classnames';
import React, { Children, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './String.module.scss';

function String({ }) {


  return (
    <div className={styles.infinite}>
      <div className={styles.String}>
        <div className={styles.text}> Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥</div>
        <div className={styles.text}> Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥 Mobile app · AR and VR projects · Chatbots · 💎 Visual · UX/UI · Digital services and websites · Intranet systems · 🔥</div>
      </div>
    </div>
  )
}

String.propType = {
}

export default React.memo(String);
