import { useState, FormEvent } from 'react';

import { Link, useHistory } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useLoading } from '../../hooks/useLoading';
import { database } from '../../services/firebase';

import { Container } from './styles';

export const NewRoom: React.FC = () => {
  const { startLoading, stopLoading } = useLoading();
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    startLoading();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
      authorName: user?.name,
      authorAvatar: user?.avatar,
    });

    stopLoading();

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
            />

            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entra em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Container>
  );
};
