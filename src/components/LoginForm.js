import React from "react";
import styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <form className={styles.form}>
            <label className={styles.label}>Name</label>
            <input name='login' className={styles.input} type='text'></input>
            <label className={styles.label}>Password</label>
            <input name='password' className={styles.input} type='password'></input>
            <button className={styles.submit} type='submit'>Submit</button>
        </form>
    );
};

export default LoginForm;