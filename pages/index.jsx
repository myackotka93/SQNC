import fetcher from '@/utils/fetcher'
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react'
import typograf, { parser } from '@/utils/typograf';
import Button from '@/components/Button/Button';
import String from '@/blocks/String/String';
import styles from './index.module.scss';

export default function Home() {

  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.background}>
          <String />
          <div className={styles.wrapper}>
            <div className={styles.video_container}>
            <div className={styles.overlay}></div>
              <video 
                ref={videoRef}
                autoPlay 
                playsInline 
                loop 
                muted 
                width="100%" 
                height="100%"  
                className={styles.video}
                src="/images/show.mp4" />

                <div className={styles.content}>
                  {/* <button 
                    className={styles.button_circle}
                    onClick={() => videoHandler("play")}>
                      STOP
                  </button> */}

                  {/* <img 
                    className={styles.button_circle}
                    src="/images/stop.png"/> */}

                  {playing ? (
                    <img
                      onClick={() => videoHandler("pause")}
                      className={styles.button_circle}
                      alt=""
                      src="/images/pause.png"
                    />
                  ) : (
                    <img
                      onClick={() => videoHandler("play")}
                      className={styles.button_circle}
                      alt=""
                      src="/images/stop.png"
                    />
                  )}                    
                </div>
                
                <div className={styles.expand}>
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6666 1.33333L17.3333 6.66666L14.6666 9.33333M1.33331 22.6667V17.3333V22.6667ZM1.33331 22.6667H6.66665H1.33331ZM1.33331 22.6667L6.66665 17.3333L9.33331 14.6667L1.33331 22.6667ZM22.6666 1.33333H17.3333H22.6666ZM22.6666 1.33333V6.66666V1.33333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.6666 22.6667L17.3333 17.3333L14.6666 14.6667M1.33331 1.33333V6.66666V1.33333ZM1.33331 1.33333H6.66665H1.33331ZM1.33331 1.33333L6.66665 6.66666L9.33331 9.33333L1.33331 1.33333ZM22.6666 22.6667H17.3333H22.6666ZM22.6666 22.6667V17.3333V22.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
  
            </div>

            <div className={styles.footer}>
              <div className={styles.first}>
                <img className={styles.img} src="/images/logo.svg"/>
                <div className={styles.text}>сайт находится в разработке</div>
              </div>
              <Button className={styles.Button}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}