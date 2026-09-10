
import styles from "./Home.module.css";





const Home = () => {
  return (
    <div className={styles.ht}>
      <div className={styles.home}>
        <h1>Home Page</h1>
        <br/>
        <p>Welcome to my React website</p>
        <br/>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;

