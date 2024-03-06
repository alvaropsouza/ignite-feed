import { HandsClapping, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/alvaropsouza.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Álvaro Souza</strong>
              <time
                title="11 de maio às 08:13h"
                dateTime={new Date().toString()}
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <HandsClapping />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
