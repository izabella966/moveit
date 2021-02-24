import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsyEv5WMEqspFErAN4i5dBIFxdkGCUuspWw&usqp=CAU"
            alt= "Izabella Guimarães" />
            <div>
                <strong>Izabella Guimarães</strong>                
                <p>
                    <img src="icons/level.svg"></img> 
                    Level 1</p>
            </div>
        </div>
    );
}