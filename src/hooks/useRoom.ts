import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type Room = {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  isClosed: boolean;
};

type FirebaseQuestion = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type Questions = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
  likesCount: number;
  likeId: string | undefined;
};

type UseRoomData = {
  room: Room;
  questions: Questions[];
  title: string;
  closedRoom: boolean;
};

export const useRoom = (roomId: string): UseRoomData => {
  const { user } = useAuth();

  const [room, setRoom] = useState<Room>({} as Room);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [closedRoom, setClosedRoom] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', databaseRoom => {
      if (databaseRoom.val().closedAt) {
        setClosedRoom(true);

        return;
      }

      const roomData = databaseRoom.val();

      const firebaseQuestions = roomData.questions as FirebaseQuestion;

      const parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(
        ([questionKey, value]) => {
          return {
            id: questionKey,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likesCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([, like]) => like.authorId === user?.id,
            )?.[0],
          };
        },
      );

      setRoom(roomData);
      setTitle(roomData.title);
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { room, questions, title, closedRoom };
};
