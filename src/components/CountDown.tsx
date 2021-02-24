import styles from  '../styles/components/CountDown.module.css';

export function CountDown (){
    return(
        <div className={styles.countDownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </div>

    );
}