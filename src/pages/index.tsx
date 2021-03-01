import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.containerLogin}>
      <section>
        <div />
        <div className={styles.form}>
          <header>
            <img src="logo-full-white.svg" alt="Logo Move.it"/>
          </header>
          <main>
            <h1>Bem vindo(a)</h1>
            <div>
              <img src="icons/github.svg" alt="Logo Github"/>
              <p>Faça seu login com seu Github para começar</p>
            </div>
          </main>
          <footer>
            <input type="text" placeholder="Digite seu username"/>
            <button><img src="icons/arrow-button.svg" alt="Seta Botão" /></button>
          </footer>
        </div>
      </section>
    </div>
  );
}
