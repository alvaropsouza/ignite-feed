import { useState } from "react";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post(props) {
  const { author, publishedAt, content } = props;

  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h' 'em' yyyy",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function handleNewInvalidComment() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter((c) => c !== comment);
    setComments(commentsWithoutDeletedOne);
    console.log(`Deletar comentário ${comment}`);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <p key={line.content} content={line.content}>
                {line.content}
              </p>
            );
          } else if (line.type === "link") {
            return (
              <p key={line.content} content={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewInvalidComment}
        ></textarea>

        <footer>
          <button type="submit" disabled={!newCommentText.length}>
            Enviar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
