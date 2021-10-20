import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo" />

      <ul className={styles.messageList}>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza
            vai ser o melhor de todos o s tempos,
            vamooo pra cima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/arthurfortunato.png" alt="Arthur Fortunato" />
            </div>
            <span>Arthur Fortunato</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza
            vai ser o melhor de todos o s tempos,
            vamooo pra cima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/arthurfortunato.png" alt="Arthur Fortunato" />
            </div>
            <span>Arthur Fortunato</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza
            vai ser o melhor de todos o s tempos,
            vamooo pra cima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/arthurfortunato.png" alt="Arthur Fortunato" />
            </div>
            <span>Arthur Fortunato</span>
          </div>
        </li>

      </ul>
    </div>
  )
}