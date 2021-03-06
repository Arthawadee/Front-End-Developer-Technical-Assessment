import Head from "next/head";
import AllUser from "../components/User/AllUser";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All User</title>
      </Head>
      <AllUser />
    </div>
  );
}
