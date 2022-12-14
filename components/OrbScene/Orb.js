import { Graphics } from 'pixi.js';
import { map, random } from './utils';
import { createNoise2D } from 'simplex-noise';
import debounce from '@/utils/debounce';

const simplex = new createNoise2D();

export default class Orb {
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds['x'].min, this.bounds['x'].max);
    this.y = random(this.bounds['y'].min, this.bounds['y'].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    if (window.innerWidth < 768) {
      this.radius = random(window.innerWidth / 3, window.innerWidth / 2.5);
    } else {
      this.radius = random(window.innerHeight / 3, window.innerHeight / 2.5);
    }


    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, window.innerWidth);
    this.yOff = random(0, window.innerHeight);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.0002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new Graphics();
    this.graphics.alpha = 0.2;
    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      'resize',
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDistX = window.innerWidth / 1.25;
    const maxDistY = window.innerHeight / 1.25;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;

    // allow each orb to move x distance away from it's { x, y }origin
    return {
      x: {
        min: originX - maxDistX,
        max: originX + maxDistX
      },
      y: {
        min: originY - maxDistY,
        max: originY + maxDistY
      }
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex(this.xOff, this.xOff);
    const yNoise = simplex(this.yOff, this.yOff);
    const scaleNoise = simplex(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}