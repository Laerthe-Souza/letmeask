import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';
import { database } from '../../services/firebase';

export const SignIn: React.FC = () => {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists');

      return;
    }

    if (roomRef.val().closedAt) {
      alert('Room already closed');

      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando troca perguntas e respostas"
        />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tira as dúvidas de sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <button
            onClick={handleCreateRoom}
            type="button"
            className="create-room"
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Container>
  );
};
