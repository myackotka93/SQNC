import React, { forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './OrbScene.module.scss';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';

import { Application } from 'pixi.js';
import Orb from './Orb';

const colors = [
  0xffb84e,
  // 0x000000,
  0xffffff,
];

const OrbScene = (props) => {
  useEffect(() => {
    const app = new Application({
      // render to <canvas class="orb-canvas"></canvas>
      view: document.querySelector('.orb-canvas'),
      // auto adjust size to fit the current window
      resizeTo: window,
      // transparent background, we will be creating a gradient background later using CSS
      backgroundAlpha: 0,
    });

    const orbs = [];

    for (let i = 0; i < 4; i++) {
      const orb = new Orb(colors[i % 2]);
      app.stage.addChild(orb.graphics);

      orbs.push(orb);
    }


    if (window.innerWidth < 768) { 
      app.stage.filters = [new KawaseBlurFilter(30, 10)];
    } else {
      app.stage.filters = [new KawaseBlurFilter(80, 10)];
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      app.ticker.add(() => {
        // update and render each orb, each frame. app.ticker attempts to run at 60fps
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      // perform one update and render per orb, do not animate
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }

    return () => {
      app.destroy(true, true);
    }
  }, [])

  return (
    <canvas className={classNames("orb-canvas", styles.OrbScene)}></canvas>
  )
}

OrbScene.propType = {
}

OrbScene.displayName = 'OrbScene';

export default React.memo(OrbScene);
