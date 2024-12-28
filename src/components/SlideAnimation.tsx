import styles from './slideAnimation.module.css'
export const Slide = ()=> {
    return (
        <div className={styles.slideAnimationDiv}>
          <div className={styles.topLine}></div>
          <div className={styles.rightLine}>Slide</div>
            <h3 className={styles.text}>Slide</h3>
          <div className={styles.bottomLine}></div>
          <div className={styles.leftLine}>Slide</div>
        </div>
    )
}