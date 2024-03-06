import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/alvaropsouza.png"
          />
          <div className={styles.authorInfo}>
            <strong>Álvaro Souza</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime={new Date().toString()}>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#rocketseat</a>{" "}
          <a href="">#nlw </a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </article>
  );
}
