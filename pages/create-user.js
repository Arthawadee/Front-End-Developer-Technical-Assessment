import Head from "next/head";
import UserForm from "../components/User/UserForm";
import styles from "../styles/Home.module.css";

export default function CreateUser() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create New User</title>
      </Head>
      <UserForm />
    </div>
  );
}
