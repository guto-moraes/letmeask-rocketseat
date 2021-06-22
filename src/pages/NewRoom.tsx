// import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import { Button } from '../components/Button';
import illustrationAsideHome from '../assets/images/illustration.svg';
import appLogo from '../assets/images/logo.svg';

export function NewRoom() {

  // const { user } = useAuth;

  return (
    <div className="page-form-default create-new-room">
      <aside className="page-form-default__aside">
        <img src={illustrationAsideHome} alt="Qualquer coisas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda a compartilhar conhecimento com outras pessoas.</p>
      </aside>
      <main className="page-form-default__main">
        <div className="page-form-default__main-auth">

          <img className="app-logo" src={appLogo} alt="Let Me Ask" />

          <h2>Crie uma nova sala</h2>

          <form className="auth-form" action="">

            <input
              className="d-block room-code"
              type="text"
              placeholder="Nome da sala"
            />

            <Button className="btn bnt-sign-in d-block" type="submit" role="button">
              Criar Sala
            </Button>
            <p className="room-enter">Quer entrar em uma sala já existente? <Link className="link" to="/" title="Entrar">Clique aqui</Link></p>

          </form>
        </div>
      </main>
    </div>
  );
}
