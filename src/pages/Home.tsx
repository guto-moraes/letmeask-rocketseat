import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import illustrationAsideHome from '../assets/images/illustration.svg';
import appLogo from '../assets/images/logo.svg';
import googleLogoIcon from '../assets/images/google-icon.svg';
import signInIcon from '../assets/images/log-in.svg';

export function Home() {

  const history = useHistory();
  const { user, singInWithGoogle } = useAuth();

  async function handlerCreateRoom() {
    if (!user) {
      await singInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div className="page-form-default">
      <aside className="page-form-default__aside">
        <img src={illustrationAsideHome} alt="Qualquer coisas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda a compartilhar conhecimento com outras pessoas.</p>
      </aside>
      <main className="page-form-default__main">
        <div className="page-form-default__main-auth">

          <img className="app-logo" src={appLogo} alt="Let Me Ask" />

          <Button onClick={handlerCreateRoom} className="btn d-block google-auth">
            <img src={googleLogoIcon} alt="Google account create room" />
            Crie sua sala com com Google
          </Button>

          <div className="divider">ou entre em uma sala</div>

          <form className="auth-form" action="">

            <input
              className="d-block room-code"
              type="text"
              placeholder="Digite o código da sala"
            />

            <Button className="btn bnt-sign-in d-block" type="submit" role="button">
              <img className="log-in" src={signInIcon} alt="Login in the room" />
              Entrar na Sala
            </Button>

          </form>
        </div>
      </main>
    </div>
  );
}