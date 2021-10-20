import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=108d1eafc8b758b4b573`;



  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      console.log({ urlWithoutCode, githubCode })

      window.history.pushState({}, '', urlWithoutCode);

    }
  })

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size='24px' />
        Entrar com Github
      </a>

    </div>
  )
}