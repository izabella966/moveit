
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>      
      < ExperienceBar />
      <section>
        <div className="profile">
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>
        <div></div>
      </section>
    </div>
  )
}
