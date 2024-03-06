import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Álvaro Souza"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quibusdam aut voluptatibus aperiam accusamus dignissimos, ut itaque culpa commodi, dolor a. Quo tenetur omnis aliquam quas tempora distinctio sint sequi."
          />
          <Post
            author="Álvaro Souza"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quibusdam aut voluptatibus aperiam accusamus dignissimos, ut itaque culpa commodi, dolor a. Quo tenetur omnis aliquam quas tempora distinctio sint sequi."
          />
        </main>
      </div>
    </>
  );
}
