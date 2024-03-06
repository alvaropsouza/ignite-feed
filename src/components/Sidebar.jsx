import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={styles.cover}
        />
        <div className={styles.profile}>
          <img
            src="https://github.com/alvaropsouza.png"
            className={styles.avatar}
          />
          <strong>Álvaro Souza</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
