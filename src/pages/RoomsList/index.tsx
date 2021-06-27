import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';
import { useLoading } from '../../hooks/useLoading';
import { database } from '../../services/firebase';

import { Container } from './styles';

type FirebaseRoom = {
  roomId: string;
  title: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  closedAt: Date;
};

type Room = {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  isClosed: boolean;
};

export const RoomsList: React.FC = () => {
  const { stopLoading } = useLoading();
  const history = useHistory();

  const [rooms, setRooms] = useState<Room[]>([]);

  function handleNavigateToSign() {
    history.push('/');
  }

  function handleNavigateToRoom(roomId: string) {
    history.push(`/rooms/${roomId}`);
  }

  useEffect(() => {
    const roomRef = database.ref('rooms');

    roomRef.on('value', room => {
      const firebaseRooms = room.val() as FirebaseRoom[];

      const allRooms = Object.entries(firebaseRooms).map(([roomKey, value]) => {
        return {
          id: roomKey,
          title: value.title,
          authorId: value.authorId,
          authorName: value.authorName,
          authorAvatar: value.authorAvatar,
          isClosed: !!value.closedAt,
        };
      });

      stopLoading();

      setRooms(allRooms);
    });

    return () => {
      roomRef.off('value');
    };
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <Button isOutlined type="button" onClick={handleNavigateToSign}>
            Voltar
          </Button>
        </div>
      </Header>

      <main>
        <h1>Salas disponíveis</h1>

        <table className="rooms-list">
          <thead>
            <tr>
              <td>Nome da sala</td>
              <td>Responsável</td>
              <td>Status</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.id}>
                <td>{room.title}</td>
                <td>
                  <UserInfo name={room.authorName} avatar={room.authorAvatar} />
                </td>
                <td>
                  <span className={room.isClosed ? 'closed' : ''}>
                    {room.isClosed ? 'Fechada' : 'Aberta'}
                  </span>
                </td>
                <td>
                  <Button
                    disabled={room.isClosed}
                    type="button"
                    onClick={() => {
                      handleNavigateToRoom(room.id);
                    }}
                  >
                    Entrar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
};
